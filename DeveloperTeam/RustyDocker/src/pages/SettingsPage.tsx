import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Settings as SettingsIcon,
  Docker,
  Bell,
  Palette,
  Shield,
  HardDrive,
  Network
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <SettingsIcon className="w-6 h-6" />
          <div>
            <h1 className="text-2xl font-semibold">Settings</h1>
            <p className="text-muted-foreground mt-1">
              Configure Docker settings and preferences
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Docker className="w-5 h-5" />
                <span>General</span>
              </CardTitle>
              <CardDescription>
                Configure general Docker Desktop settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Start Docker Desktop when you log in</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically start Docker Desktop on system startup
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Open Docker Desktop dashboard at startup</h4>
                  <p className="text-sm text-muted-foreground">
                    Show the dashboard when Docker Desktop starts
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Disabled
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HardDrive className="w-5 h-5" />
                <span>Resources</span>
              </CardTitle>
              <CardDescription>
                Configure CPU, memory, and disk usage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">CPUs</h4>
                  <p className="text-sm text-muted-foreground">
                    Number of CPUs available to Docker
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  4 CPUs
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Memory</h4>
                  <p className="text-sm text-muted-foreground">
                    Amount of memory available to Docker
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  8.00 GB
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Swap</h4>
                  <p className="text-sm text-muted-foreground">
                    Amount of swap space available to Docker
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  1.00 GB
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Network */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Network className="w-5 h-5" />
                <span>Network</span>
              </CardTitle>
              <CardDescription>
                Configure network settings for Docker
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Enable host networking</h4>
                  <p className="text-sm text-muted-foreground">
                    Allow containers to use host network stack
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Appearance</span>
              </CardTitle>
              <CardDescription>
                Customize the look and feel of Docker Desktop
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Theme</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose between light and dark mode
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  System
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>
                Configure notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Show notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about Docker events
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Security</span>
              </CardTitle>
              <CardDescription>
                Configure security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Require authentication for privileged operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Require password for sensitive Docker operations
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};