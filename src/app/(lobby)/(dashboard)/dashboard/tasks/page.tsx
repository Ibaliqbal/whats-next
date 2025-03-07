"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Clock } from "lucide-react";
import type { Task } from "@/types/task";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Finalize homepage design",
    description: "Review and approve the final homepage mockups",
    priority: "High",
    project: "Website Redesign",
    assignee: "AJ",
    dueDate: "2025-03-25",
    status: "In Progress",
  },
  {
    id: "2",
    title: "Implement user authentication",
    description: "Set up user registration and login functionality",
    priority: "High",
    project: "Mobile App Development",
    assignee: "CB",
    dueDate: "2025-03-28",
    status: "To Do",
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Document all endpoints and request/response formats",
    priority: "Medium",
    project: "Backend Services",
    assignee: "DE",
    dueDate: "2025-04-01",
    status: "Done",
  },
  // Add more tasks as needed
];

const statusColors = {
  "To Do": "bg-slate-500",
  "In Progress": "bg-blue-500",
  Done: "bg-green-500",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            View and manage all tasks across projects
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="w-full pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Clock className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {task.project}
                  </p>
                </div>
                <Badge className={`${statusColors[task.status]} text-white`}>
                  {task.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
