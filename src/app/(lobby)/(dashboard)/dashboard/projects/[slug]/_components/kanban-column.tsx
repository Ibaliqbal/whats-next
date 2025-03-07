import { KanbanItem } from "./kanban-item";
import { Badge } from "@/components/ui/badge";
import type { Task } from "@/types/task";

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

export function KanbanColumn({ id, title, tasks }: KanbanColumnProps) {

  return (
    <div
      className="bg-card text-card-foreground shadow-sm rounded-lg p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>
        <Badge variant="outline">{tasks.length}</Badge>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <KanbanItem key={task.id} id={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
