import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Container, 
  Image, 
  Play, 
  Volume2, 
  Network,
  Settings,
  Search
} from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'containers',
    label: 'Containers',
    icon: <Container className="w-5 h-5" />,
    path: '/containers',
    badge: 5
  },
  {
    id: 'images',
    label: 'Images',
    icon: <Image className="w-5 h-5" />,
    path: '/images',
    badge: 12
  },
  {
    id: 'volumes',
    label: 'Volumes',
    icon: <Volume2 className="w-5 h-5" />,
    path: '/volumes',
    badge: 3
  },
  {
    id: 'networks',
    label: 'Networks',
    icon: <Network className="w-5 h-5" />,
    path: '/networks',
    badge: 2
  },
  {
    id: 'dev-environments',
    label: 'Dev Environments',
    icon: <Play className="w-5 h-5" />,
    path: '/dev-environments'
  }
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-full">
      {/* Search Section */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search containers, images..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-border">
        <Link
          to="/settings"
          className={cn(
            "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
            location.pathname === '/settings'
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};