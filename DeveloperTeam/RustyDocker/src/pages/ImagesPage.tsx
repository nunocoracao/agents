import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  Trash2,
  MoreHorizontal,
  ArrowRight,
  Layers,
  Tag
} from 'lucide-react';

interface DockerImage {
  id: string;
  repository: string;
  tag: string;
  imageId: string;
  created: string;
  size: string;
  inUse: boolean;
}

const mockImages: DockerImage[] = [
  {
    id: '1',
    repository: 'nginx',
    tag: 'latest',
    imageId: 'sha256:1234567890ab',
    created: '2 days ago',
    size: '133MB',
    inUse: true
  },
  {
    id: '2',
    repository: 'postgres',
    tag: '13',
    imageId: 'sha256:abcdef123456',
    created: '1 week ago',
    size: '314MB',
    inUse: true
  },
  {
    id: '3',
    repository: 'redis',
    tag: 'alpine',
    imageId: 'sha256:567890abcdef',
    created: '3 days ago',
    size: '32MB',
    inUse: false
  },
  {
    id: '4',
    repository: 'node',
    tag: '18-alpine',
    imageId: 'sha256:fedcba987654',
    created: '5 days ago',
    size: '156MB',
    inUse: true
  },
  {
    id: '5',
    repository: 'prometheus',
    tag: 'latest',
    imageId: 'sha256:987654321fed',
    created: '1 week ago',
    size: '245MB',
    inUse: false
  },
  {
    id: '6',
    repository: 'ubuntu',
    tag: '20.04',
    imageId: 'sha256:135792468ace',
    created: '2 weeks ago',
    size: '72MB',
    inUse: false
  },
  {
    id: '7',
    repository: 'mysql',
    tag: '8.0',
    imageId: 'sha256:ace135792468',
    created: '4 days ago',
    size: '521MB',
    inUse: true
  },
  {
    id: '8',
    repository: 'alpine',
    tag: 'latest',
    imageId: 'sha256:468ace135792',
    created: '1 day ago',
    size: '5MB',
    inUse: false
  },
  {
    id: '9',
    repository: 'python',
    tag: '3.9-slim',
    imageId: 'sha256:792468ace135',
    created: '6 days ago',
    size: '122MB',
    inUse: true
  },
  {
    id: '10',
    repository: 'mongo',
    tag: '5.0',
    imageId: 'sha256:68ace1357924',
    created: '3 weeks ago',
    size: '693MB',
    inUse: false
  },
  {
    id: '11',
    repository: 'elasticsearch',
    tag: '7.17.0',
    imageId: 'sha256:e1357924ace6',
    created: '1 month ago',
    size: '1.2GB',
    inUse: false
  },
  {
    id: '12',
    repository: 'rabbitmq',
    tag: '3-management',
    imageId: 'sha256:57924ace6813',
    created: '2 weeks ago',
    size: '255MB',
    inUse: true
  }
];

export const ImagesPage: React.FC = () => {
  const inUseImages = mockImages.filter(img => img.inUse);
  const unusedImages = mockImages.filter(img => !img.inUse);

  const totalSize = mockImages.reduce((total, img) => {
    const size = parseFloat(img.size);
    const unit = img.size.slice(-2);
    let sizeInMB = size;
    
    if (unit === 'GB') {
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
            <h1 className="text-2xl font-semibold">Images</h1>
            <p className="text-muted-foreground mt-1">
              {mockImages.length} images, {inUseImages.length} in use, {formatTotalSize(totalSize)} total size
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Pull Image
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clean Up
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="all" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All ({mockImages.length})</TabsTrigger>
            <TabsTrigger value="in-use">In Use ({inUseImages.length})</TabsTrigger>
            <TabsTrigger value="unused">Unused ({unusedImages.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="flex-1 mt-6">
            <div className="grid gap-4">
              {mockImages.map((image) => (
                <Card key={image.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Layers className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-lg">{image.repository}</h3>
                            <div className="flex items-center space-x-1">
                              <Tag className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{image.tag}</span>
                            </div>
                            {image.inUse && (
                              <span className="bg-success/10 text-success text-xs px-2 py-0.5 rounded-full">
                                In Use
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {image.imageId.substring(0, 19)}...
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {image.created}</span>
                            <span>Size: {image.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!image.inUse && (
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
          </TabsContent>

          <TabsContent value="in-use" className="flex-1 mt-6">
            <div className="grid gap-4">
              {inUseImages.map((image) => (
                <Card key={image.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Layers className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-lg">{image.repository}</h3>
                            <div className="flex items-center space-x-1">
                              <Tag className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{image.tag}</span>
                            </div>
                            <span className="bg-success/10 text-success text-xs px-2 py-0.5 rounded-full">
                              In Use
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {image.imageId.substring(0, 19)}...
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {image.created}</span>
                            <span>Size: {image.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
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
          </TabsContent>

          <TabsContent value="unused" className="flex-1 mt-6">
            <div className="grid gap-4">
              {unusedImages.map((image) => (
                <Card key={image.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Layers className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-lg">{image.repository}</h3>
                            <div className="flex items-center space-x-1">
                              <Tag className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{image.tag}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {image.imageId.substring(0, 19)}...
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {image.created}</span>
                            <span>Size: {image.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};