import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plus,
  Trash2,
  MoreHorizontal,
  ArrowRight,
  Volume2,
  HardDrive
} from 'lucide-react';

interface Volume {
  id: string;
  name: string;
  driver: string;
  mountpoint: string;
  created: string;
  size: string;
  containers: string[];
}

const mockVolumes: Volume[] = [
  {
    id: '1',
    name: 'postgres_data',
    driver: 'local',
    mountpoint: '/var/lib/docker/volumes/postgres_data/_data',
    created: '1 week ago',
    size: '245MB',
    containers: ['database']
  },
  {
    id: '2',
    name: 'nginx_config',
    driver: 'local',
    mountpoint: '/var/lib/docker/volumes/nginx_config/_data',
    created: '2 days ago',
    size: '12KB',
    containers: ['web-server']
  },
  {
    id: '3',
    name: 'app_logs',
    driver: 'local',
    mountpoint: '/var/lib/docker/volumes/app_logs/_data',
    created: '5 hours ago',
    size: '89MB',
    containers: ['api-server', 'web-server']
  }
];

export const VolumesPage: React.FC = () => {
  const totalSize = mockVolumes.reduce((total, volume) => {
    const size = parseFloat(volume.size);
    const unit = volume.size.slice(-2);
    let sizeInMB = size;
    
    if (unit === 'KB') {
      sizeInMB = size / 1024;
    } else if (unit === 'GB') {
      sizeInMB = size * 1024;
    }
    
    return total + sizeInMB;
  }, 0);

  const formatTotalSize = (sizeInMB: number) => {
    if (sizeInMB >= 1024) {
      return `${(sizeInMB / 1024).toFixed(1)}GB`;
    }
    return `${sizeInMB.toFixed(0)}MB`;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Volumes</h1>
            <p className="text-muted-foreground mt-1">
              {mockVolumes.length} volumes, {formatTotalSize(totalSize)} total size
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Volume
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Prune Unused
            </Button>
          </div>
        </div>
      </div>

      {/* Volumes List */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid gap-4">
          {mockVolumes.map((volume) => (
            <Card key={volume.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Volume2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">{volume.name}</h3>
                        <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
                          {volume.driver}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <HardDrive className="w-3 h-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground truncate max-w-md">
                          {volume.mountpoint}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                        <span>Created {volume.created}</span>
                        <span>Size: {volume.size}</span>
                        {volume.containers.length > 0 && (
                          <span>
                            Used by: {volume.containers.join(', ')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {volume.containers.length === 0 && (
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};