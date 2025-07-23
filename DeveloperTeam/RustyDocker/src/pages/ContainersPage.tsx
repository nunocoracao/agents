import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Square, 
  MoreHorizontal, 
  ArrowRight,
  Circle,
  Activity
} from 'lucide-react';

interface Container {
  id: string;
  name: string;
  image: string;
  status: 'running' | 'stopped' | 'paused';
  ports: string[];
  created: string;
  size: string;
}

const mockContainers: Container[] = [
  {
    id: '1',
    name: 'web-server',
    image: 'nginx:latest',
    status: 'running',
    ports: ['80:80', '443:443'],
    created: '2 hours ago',
    size: '133MB'
  },
  {
    id: '2',
    name: 'database',
    image: 'postgres:13',
    status: 'running',
    ports: ['5432:5432'],
    created: '1 day ago',
    size: '314MB'
  },
  {
    id: '3',
    name: 'redis-cache',
    image: 'redis:alpine',
    status: 'stopped',
    ports: ['6379:6379'],
    created: '3 days ago',
    size: '32MB'
  },
  {
    id: '4',
    name: 'api-server',
    image: 'node:18-alpine',
    status: 'running',
    ports: ['3000:3000'],
    created: '5 hours ago',
    size: '156MB'
  },
  {
    id: '5',
    name: 'monitoring',
    image: 'prometheus:latest',
    status: 'paused',
    ports: ['9090:9090'],
    created: '1 week ago',
    size: '245MB'
  }
];

const getStatusColor = (status: Container['status']) => {
  switch (status) {
    case 'running':
      return 'text-success';
    case 'stopped':
      return 'text-destructive';
    case 'paused':
      return 'text-yellow-500';
    default:
      return 'text-muted-foreground';
  }
};

const getStatusIcon = (status: Container['status']) => {
  switch (status) {
    case 'running':
      return <Circle className="w-3 h-3 fill-current" />;
    case 'stopped':
      return <Square className="w-3 h-3" />;
    case 'paused':
      return <Activity className="w-3 h-3" />;
    default:
      return <Circle className="w-3 h-3" />;
  }
};

export const ContainersPage: React.FC = () => {
  const runningContainers = mockContainers.filter(c => c.status === 'running');
  const stoppedContainers = mockContainers.filter(c => c.status === 'stopped');
  const pausedContainers = mockContainers.filter(c => c.status === 'paused');

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Containers</h1>
            <p className="text-muted-foreground mt-1">
              {runningContainers.length} running, {stoppedContainers.length} stopped, {pausedContainers.length} paused
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Play className="w-4 h-4 mr-2" />
              Start All
            </Button>
            <Button variant="outline" size="sm">
              <Square className="w-4 h-4 mr-2" />
              Stop All
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="all" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({mockContainers.length})</TabsTrigger>
            <TabsTrigger value="running">Running ({runningContainers.length})</TabsTrigger>
            <TabsTrigger value="stopped">Stopped ({stoppedContainers.length})</TabsTrigger>
            <TabsTrigger value="paused">Paused ({pausedContainers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="flex-1 mt-6">
            <div className="grid gap-4">
              {mockContainers.map((container) => (
                <Card key={container.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center space-x-2 ${getStatusColor(container.status)}`}>
                          {getStatusIcon(container.status)}
                          <span className="font-medium capitalize">{container.status}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{container.name}</h3>
                          <p className="text-sm text-muted-foreground">{container.image}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {container.created}</span>
                            <span>Size: {container.size}</span>
                            {container.ports.length > 0 && (
                              <span>Ports: {container.ports.join(', ')}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {container.status === 'running' && (
                          <Button variant="outline" size="sm">
                            <Square className="w-4 h-4 mr-2" />
                            Stop
                          </Button>
                        )}
                        {container.status === 'stopped' && (
                          <Button variant="outline" size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            Start
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

          <TabsContent value="running" className="flex-1 mt-6">
            <div className="grid gap-4">
              {runningContainers.map((container) => (
                <Card key={container.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-success">
                          <Circle className="w-3 h-3 fill-current" />
                          <span className="font-medium">Running</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{container.name}</h3>
                          <p className="text-sm text-muted-foreground">{container.image}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {container.created}</span>
                            <span>Size: {container.size}</span>
                            {container.ports.length > 0 && (
                              <span>Ports: {container.ports.join(', ')}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Square className="w-4 h-4 mr-2" />
                          Stop
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

          <TabsContent value="stopped" className="flex-1 mt-6">
            <div className="grid gap-4">
              {stoppedContainers.map((container) => (
                <Card key={container.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-destructive">
                          <Square className="w-3 h-3" />
                          <span className="font-medium">Stopped</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{container.name}</h3>
                          <p className="text-sm text-muted-foreground">{container.image}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {container.created}</span>
                            <span>Size: {container.size}</span>
                            {container.ports.length > 0 && (
                              <span>Ports: {container.ports.join(', ')}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Start
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

          <TabsContent value="paused" className="flex-1 mt-6">
            <div className="grid gap-4">
              {pausedContainers.map((container) => (
                <Card key={container.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-yellow-500">
                          <Activity className="w-3 h-3" />
                          <span className="font-medium">Paused</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{container.name}</h3>
                          <p className="text-sm text-muted-foreground">{container.image}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Created {container.created}</span>
                            <span>Size: {container.size}</span>
                            {container.ports.length > 0 && (
                              <span>Ports: {container.ports.join(', ')}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Resume
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