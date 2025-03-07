"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/utils/helper";
import { Task } from "@/types/task";

interface KanbanBoardProps {
  tasks: Record<string, Task[]>;
  onUpdateTask: (task: Task, newStatus: string) => void;
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export function KanbanBoard({
  tasks,
  onUpdateTask,
  onDeleteTask,
  onEditTask,
}: KanbanBoardProps) {
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {statuses.map((status) => (
        <Card key={status}>
          <CardHeader>
            <CardTitle className="flex justify-between">
              {status}
              <Badge>{tasks[status]?.length || 0}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tasks[status]?.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{task.title}</h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => onEditTask(task)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {statuses
                          .filter((s) => s !== status)
                          .map((newStatus) => (
                            <DropdownMenuItem
                              key={newStatus}
                              onClick={() => onUpdateTask(task, newStatus)}
                            >
                              Move to {newStatus}
                            </DropdownMenuItem>
                          ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => onDeleteTask(task.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {task.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={`/placeholder.svg?height=24&width=24`}
                          alt={task.assignee}
                        />
                        <AvatarFallback>{task.assignee}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">
                        {task.assignee}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{formatDate(task.dueDate)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
