import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { formatDate } from "@/utils/helper";
import type { Task } from "@/types/task";

interface KanbanItemProps {
  id: string;
  task: Task;
}

const priorityColors = {
  High: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  Medium:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  Low: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

export function KanbanItem({ id, task }: KanbanItemProps) {
  return (
    <div className="bg-background p-4 rounded-md shadow cursor-move">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{task.title}</h4>
        <Badge
          variant="secondary"
          className={`${priorityColors[task.priority]} text-xs`}
        >
          {task.priority}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage
              src={`/placeholder.svg?height=24&width=24`}
              alt={task.assignee}
            />
            <AvatarFallback>{task.assignee}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{task.assignee}</span>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
      </div>
    </div>
  );
}
