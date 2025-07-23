import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const DevEnvironmentsPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Dev Environments</h1>
            <p className="text-muted-foreground mt-1">
              Create and manage development environments
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-2xl mx-auto text-center py-16">
          <Card>
            <CardHeader>
              <CardTitle>Development Environments</CardTitle>
              <CardDescription>
                Create isolated development environments with pre-configured tools and services.
                This feature is coming soon!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button disabled>
                Create New Environment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};