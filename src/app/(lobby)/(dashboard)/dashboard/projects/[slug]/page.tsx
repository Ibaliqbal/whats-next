"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  Filter,
  PlusCircle,
  Search,
  MoreHorizontal,
  Calendar,
  Users,
  Send,
} from "lucide-react";
import { statusColors, formatDate } from "@/utils/helper";
import { KanbanBoard } from "./_components/kanban-board";
import { NewTaskModal } from "./_components/new-task-modal";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { Task } from "@/types/task";

// Dummy data for tasks and project details
const projectDetails = {
  id: "1",
  name: "Website Redesign",
  description: "Complete overhaul of the company website with new branding",
  startDate: "2025-01-01",
  endDate: "2025-06-30",
  status: "In Progress",
  team: [
    {
      id: "1",
      name: "Alice Johnson",
      role: "Project Manager",
      avatar:
        "https://vercel.com/api/www/avatar/1_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
    },
    {
      id: "2",
      name: "Bob Smith",
      role: "UI/UX Designer",
      avatar:
        "https://vercel.com/api/www/avatar/2_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
    },
    {
      id: "3",
      name: "Charlie Davis",
      role: "Frontend Developer",
      avatar:
        "https://vercel.com/api/www/avatar/3_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
    },
    {
      id: "4",
      name: "Diana Evans",
      role: "Backend Developer",
      avatar:
        "https://vercel.com/api/www/avatar/4_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
    },
  ],
};

const initialTasks: Record<string, Task[]> = {
  "To Do": [
    {
      id: "1",
      title: "Finalize homepage design",
      description: "Review and approve the final homepage mockups",
      priority: "High",
      project: "Website Redesign",
      assignee: "AJ",
      dueDate: "2025-03-25",
    },
    // ... (other tasks)
  ],
  "In Progress": [
    // ... (tasks)
  ],
  Done: [
    // ... (tasks)
  ],
  Blocked: [
    // ... (tasks)
  ],
};

const priorityColors = {
  High: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  Medium:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  Low: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

export default function ProjectDetailPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleTaskMove = (task: Task, newStatus: string) => {
    setTasks((prevTasks) => {
      const oldStatus = Object.keys(prevTasks).find((status) =>
        prevTasks[status].some((t) => t.id === task.id)
      );
      if (!oldStatus) return prevTasks;

      const newTasks = { ...prevTasks };
      newTasks[oldStatus] = newTasks[oldStatus].filter((t) => t.id !== task.id);
      newTasks[newStatus] = [
        ...newTasks[newStatus],
        { ...task, status: newStatus },
      ];
      return newTasks;
    });
    toast.success(`Task "${task.title}" moved to ${newStatus}`);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => {
      const newTasks = { ...prevTasks };
      Object.keys(newTasks).forEach((status) => {
        newTasks[status] = newTasks[status].filter(
          (task) => task.id !== taskId
        );
      });
      return newTasks;
    });
    toast.success("Task deleted successfully");
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsNewTaskModalOpen(true);
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Alice Johnson",
      avatar:
        "https://vercel.com/api/www/avatar/1_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      content:
        "Team, I've just uploaded the latest design mockups. Please review and provide feedback by EOD.",
      timestamp: "2025-03-20T10:30:00Z",
    },
    {
      id: 2,
      author: "Bob Smith",
      avatar:
        "https://vercel.com/api/www/avatar/2_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      content:
        "Thanks, Alice. I'll take a look and share my thoughts this afternoon.",
      timestamp: "2025-03-20T11:15:00Z",
    },
    {
      id: 3,
      author: "Charlie Davis",
      avatar:
        "https://vercel.com/api/www/avatar/3_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      content:
        "I've started working on the responsive layout. Any specific breakpoints we should consider?",
      timestamp: "2025-03-21T09:00:00Z",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        author: "Current User", // Replace with actual logged-in user
        avatar:
          "https://vercel.com/api/www/avatar/5_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64", // Replace with actual user avatar
        content: newMessage,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {projectDetails.name}
            </h1>
            <p className="text-muted-foreground">
              {projectDetails.description}
            </p>
          </div>
          <Button onClick={() => setIsNewTaskModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Start Date</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatDate(projectDetails.startDate)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">End Date</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatDate(projectDetails.endDate)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projectDetails.status}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Team Members
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {projectDetails.team.length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {projectDetails.team.map((member) => (
                <div key={member.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {member.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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

        <Tabs defaultValue="kanban" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
          </TabsList>

          <TabsContent value="kanban">
            <KanbanBoard
              tasks={tasks}
              onUpdateTask={handleTaskMove}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
            />
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-8 w-full">
              {Object.entries(tasks).map(([status, taskList]) => (
                <div key={status} className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${statusColors[status]}`}
                    ></div>
                    {status}
                    <Badge variant="outline" className="ml-2">
                      {taskList.length}
                    </Badge>
                  </h3>
                  <div className="space-y-2">
                    {taskList.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-4 py-4 border-b border-border last:border-0 hover:bg-muted/50 rounded-lg px-4 transition-colors"
                      >
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{task.title}</h4>
                            <Badge
                              variant="secondary"
                              className={`${
                                priorityColors[task.priority]
                              } text-xs`}
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {task.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{task.project}</span>
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              <span>{formatDate(task.dueDate)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{task.assignee}</AvatarFallback>
                          </Avatar>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discussions">
            <Card>
              <CardHeader>
                <CardTitle>Project Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage
                          src={message.avatar}
                          alt={message.author}
                        />
                        <AvatarFallback>{message.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">
                            {message.author}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {new Date(message.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="mt-1 texxt-xs">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleAddMessage}>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => {
          setIsNewTaskModalOpen(false);
          setEditingTask(null);
        }}
        onCreateTask={(newTask) => {
          if (editingTask) {
            setTasks((prevTasks) => {
              const newTasks = { ...prevTasks };
              Object.keys(newTasks).forEach((status) => {
                newTasks[status] = newTasks[status].map((task) =>
                  task.id === editingTask.id
                    ? { ...newTask, id: task.id }
                    : task
                );
              });
              return newTasks;
            });
            toast.success("Task updated successfully");
          } else {
            setTasks((prevTasks) => ({
              ...prevTasks,
              [newTask.status]: [...prevTasks[newTask.status], newTask],
            }));
            toast.success("New task created successfully");
          }
          setIsNewTaskModalOpen(false);
          setEditingTask(null);
        }}
        editingTask={editingTask}
      />
    </>
  );
}
