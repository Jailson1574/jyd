import { cn } from "@/lib/utils";
import { MessageSquare, DollarSign, Eye, Gavel, CheckCircle } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "message" | "offer" | "view" | "auction" | "sale";
  title: string;
  description: string;
  time: string;
  domain?: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

const activityIcons = {
  message: MessageSquare,
  offer: DollarSign,
  view: Eye,
  auction: Gavel,
  sale: CheckCircle,
};

const activityColors = {
  message: "bg-info/10 text-info",
  offer: "bg-primary/10 text-primary",
  view: "bg-muted text-muted-foreground",
  auction: "bg-secondary-purple/10 text-secondary-purple",
  sale: "bg-success/10 text-success",
};

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Atividade Recente</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activityIcons[activity.type];
          return (
            <div 
              key={activity.id}
              className={cn(
                "flex items-start gap-4 pb-4",
                index !== activities.length - 1 && "border-b border-border/50"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                activityColors[activity.type]
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                {activity.domain && (
                  <p className="text-xs text-primary mt-1 font-medium">{activity.domain}</p>
                )}
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
