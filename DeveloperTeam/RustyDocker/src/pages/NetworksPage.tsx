import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plus,
  Trash2,
  MoreHorizontal,
  ArrowRight,
  Network as NetworkIcon,
  Globe
} from 'lucide-react';

interface Network {
  id: string;
  name: string;
  driver: string;
  scope: string;
  created: string;
  containers: string[];
  subnet?: string;
  gateway?: string;
}

const mockNetworks: Network[] = [
  {
    id: '1',
    name: 'bridge',
    driver: 'bridge',
    scope: 'local',
    created: '1 month ago',
    containers: ['web-server', 'api-server'],
    subnet: '172.17.0.0/16',
    gateway: '172.17.0.1'
  },
  {
    id: '2',
    name: 'host',
    driver: 'host',
    scope: 'local',
    created: '1 month ago',
    containers: []
  },
  {
    id: '3',
    name: 'none',
    driver: 'null',
    scope: 'local',
    created: '1 month ago',
    containers: []
  },
  {
    id: '4',
    name: 'myapp_network',
    driver: 'bridge',
    scope: 'local',
    created: '1 week ago',
    containers: ['database', 'redis-cache'],
    subnet: '172.18.0.0/16',
    gateway: '172.18.0.1'
  }
];

export const NetworksPage: React.FC = () => {
  const customNetworks = mockNetworks.filter(network => 
    !['bridge', 'host', 'none'].includes(network.name)
  );
  const systemNetworks = mockNetworks.filter(network => 
    ['bridge', 'host', 'none'].includes(network.name)
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Networks</h1>
            <p className="text-muted-foreground mt-1">
              {mockNetworks.length} networks ({customNetworks.length} custom, {systemNetworks.length} system)
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Network
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Prune Unused
            </Button>
          </div>
        </div>
      </div>

      {/* Networks List */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Custom Networks */}
        {customNetworks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Custom Networks</h2>
            <div className="grid gap-4">
              {customNetworks.map((network) => (
                <Card key={network.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <NetworkIcon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-lg">{network.name}</h3>
                            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
                              {network.driver}
                            </span>
                            <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">
                              {network.scope}
                            </span>
                          </div>
                          {network.subnet && (
                            <div className="flex items-center space-x-2 mt-1">
                              <Globe className="w-3 h-3 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">
                                {network.subnet} (Gateway: {network.gateway})
                              </p>
                            </div>
                          )}
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {network.created}</span>
                            {network.containers.length > 0 && (
                              <span>
                                Containers: {network.containers.join(', ')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {network.containers.length === 0 && (
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
        )}

        {/* System Networks */}
        <div>
          <h2 className="text-lg font-semibold mb-4">System Networks</h2>
          <div className="grid gap-4">
            {systemNetworks.map((network) => (
              <Card key={network.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <NetworkIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg">{network.name}</h3>
                          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
                            {network.driver}
                          </span>
                          <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">
                            {network.scope}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                            System
                          </span>
                        </div>
                        {network.subnet && (
                          <div className="flex items-center space-x-2 mt-1">
                            <Globe className="w-3 h-3 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              {network.subnet} (Gateway: {network.gateway})
                            </p>
                          </div>
                        )}
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <span>Created {network.created}</span>
                          {network.containers.length > 0 && (
                            <span>
                              Containers: {network.containers.join(', ')}
                            </span>
                          )}
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
        </div>
      </div>
    </div>
  );
};