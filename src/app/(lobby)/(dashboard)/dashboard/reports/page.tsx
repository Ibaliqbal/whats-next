"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const taskCompletionData = [
  { name: "Week 1", completed: 12, total: 20 },
  { name: "Week 2", completed: 18, total: 25 },
  { name: "Week 3", completed: 15, total: 22 },
  { name: "Week 4", completed: 20, total: 28 },
];

const projectProgressData = [
  { name: "Project A", progress: 75 },
  { name: "Project B", progress: 45 },
  { name: "Project C", progress: 90 },
  { name: "Project D", progress: 60 },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          View project and team performance metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Task Completion</CardTitle>
            <CardDescription>Weekly task completion rate</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taskCompletionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="completed"
                  fill="#8884d8"
                  name="Completed Tasks"
                />
                <Bar dataKey="total" fill="#82ca9d" name="Total Tasks" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
            <CardDescription>
              Current progress of active projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectProgressData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="progress" fill="#8884d8" name="Progress (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Performance Summary</CardTitle>
          <CardDescription>
            Overview of team productivity and efficiency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Overall Productivity</h3>
              <p className="text-2xl font-bold text-green-600">92%</p>
              <p className="text-sm text-muted-foreground">
                5% increase from last month
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Average Task Completion Time
              </h3>
              <p className="text-2xl font-bold">2.5 days</p>
              <p className="text-sm text-muted-foreground">
                0.5 days faster than previous month
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Active Projects</h3>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">
                2 new projects started this month
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
