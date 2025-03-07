import {
  BarChart3,
  Calendar,
  Clock,
  Layers,
  ListTodo,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/utils/helper";
import { Logo } from "@/components/icon";

// Dummy data
const stats = [
  {
    name: "Total Projects",
    value: "12",
    icon: BarChart3,
    description: "3 projects added this month",
  },
  {
    name: "Active Tasks",
    value: "42",
    icon: ListTodo,
    description: "12 due in the next week",
  },
  {
    name: "Team Members",
    value: "8",
    icon: Users,
    description: "2 new members this month",
  },
  {
    name: "Upcoming Deadlines",
    value: "6",
    icon: Calendar,
    description: "Next: Marketing Campaign (2 days)",
  },
];

const recentActivity = [
  {
    user: "You",
    action: "completed a task",
    object: "Design homepage mockup",
    time: "10 minutes ago",
  },
  {
    user: "Sarah Johnson",
    action: "commented on",
    object: "Mobile app UX review",
    time: "1 hour ago",
  },
  {
    user: "David Lee",
    action: "assigned a task to you",
    object: "API integration",
    time: "2 hours ago",
  },
  {
    user: "Alex Chen",
    action: "created a new project",
    object: "Q2 Marketing Campaign",
    time: "5 hours ago",
  },
  {
    user: "You",
    action: "updated the status of",
    object: "Dashboard redesign",
    time: "Yesterday",
  },
];

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    progress: 75,
    totalTasks: 24,
    completedTasks: 18,
    dueDate: "2025-04-15",
  },
  {
    id: 2,
    name: "Mobile App Development",
    progress: 45,
    totalTasks: 32,
    completedTasks: 14,
    dueDate: "2025-06-30",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    progress: 20,
    totalTasks: 18,
    completedTasks: 4,
    dueDate: "2025-05-10",
  },
  {
    id: 4,
    name: "Product Launch",
    progress: 90,
    totalTasks: 30,
    completedTasks: 27,
    dueDate: "2025-03-31",
  },
];

const upcomingTasks = [
  {
    id: 1,
    title: "Finalize homepage design",
    project: "Website Redesign",
    dueDate: "2025-03-25",
    priority: "High",
  },
  {
    id: 2,
    title: "Review API documentation",
    project: "Mobile App Development",
    dueDate: "2025-03-26",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Create social media content",
    project: "Marketing Campaign",
    dueDate: "2025-03-28",
    priority: "High",
  },
  {
    id: 4,
    title: "Test checkout flow",
    project: "Product Launch",
    dueDate: "2025-03-30",
    priority: "High",
  },
  {
    id: 5,
    title: "Set up analytics tracking",
    project: "Website Redesign",
    dueDate: "2025-04-01",
    priority: "Medium",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your projects.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    {project.completedTasks} of {project.totalTasks} tasks
                    completed
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">
                          Progress
                        </p>
                        <p className="text-sm font-medium">
                          {project.progress}%
                        </p>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{formatDate(project.dueDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ListTodo className="h-4 w-4 text-muted-foreground" />
                        <span>{project.totalTasks} tasks</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>Your tasks due in the next week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b py-3 last:border-0"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {task.project}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {formatDate(task.dueDate)}
                        </span>
                      </div>
                      <div
                        className={`px-2 py-1 text-xs rounded-full ${
                          task.priority === "High"
                            ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                            : task.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        }`}
                      >
                        {task.priority}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates from you and your team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="mt-1 rounded-full w-7 h-7 flex items-center justify-center bg-muted">
                      <Logo className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}{" "}
                        <span className="font-medium">{activity.object}</span>
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
