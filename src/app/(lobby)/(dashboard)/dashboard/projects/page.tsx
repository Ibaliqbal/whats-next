"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/utils/helper";
import { NewProjectModal } from "./_components/new-project-modal";
import { useState } from "react";

// Dummy data for projects
const initialProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    progress: 75,
    totalTasks: 24,
    completedTasks: 18,
    team: ["JD", "SK", "AL"],
    dueDate: "2025-04-15",
    status: "In Progress",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Build iOS and Android applications for customer engagement",
    progress: 45,
    totalTasks: 32,
    completedTasks: 14,
    team: ["JD", "RM", "TK", "AL"],
    dueDate: "2025-06-30",
    status: "In Progress",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q2 marketing campaign for new product launch",
    progress: 20,
    totalTasks: 18,
    completedTasks: 4,
    team: ["SK", "JD"],
    dueDate: "2025-05-10",
    status: "In Progress",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    name: "Product Launch",
    description: "Coordinate and execute the new product launch",
    progress: 90,
    totalTasks: 30,
    completedTasks: 27,
    team: ["JD", "AL", "SK", "RM", "TK"],
    dueDate: "2025-03-31",
    status: "In Progress",
    color: "bg-green-500",
  },
  {
    id: 5,
    name: "Customer Survey",
    description: "Conduct user satisfaction survey for existing clients",
    progress: 60,
    totalTasks: 15,
    completedTasks: 9,
    team: ["RM", "SK"],
    dueDate: "2025-04-20",
    status: "In Progress",
    color: "bg-indigo-500",
  },
  {
    id: 6,
    name: "Internal Training",
    description: "New software training program for all employees",
    progress: 10,
    totalTasks: 12,
    completedTasks: 1,
    team: ["TK", "JD"],
    dueDate: "2025-05-25",
    status: "In Progress",
    color: "bg-pink-500",
  },
];

const completedProjects = [
  {
    id: 7,
    name: "Brand Redesign",
    description: "Redesign company logo and brand guidelines",
    progress: 100,
    totalTasks: 18,
    completedTasks: 18,
    team: ["JD", "AL", "SK"],
    dueDate: "2025-02-15",
    status: "Completed",
    color: "bg-gray-500",
  },
  {
    id: 8,
    name: "Q1 Financial Review",
    description: "Analyze Q1 financial performance and create reports",
    progress: 100,
    totalTasks: 10,
    completedTasks: 10,
    team: ["RM", "TK"],
    dueDate: "2025-01-30",
    status: "Completed",
    color: "bg-gray-500",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">
              Manage and track all your team's projects
            </p>
          </div>
          <Button onClick={() => setIsNewProjectModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          {/* Active Projects Tab */}
          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${project.color}`}
                      ></div>
                      <CardTitle className="text-lg truncate">
                        {project.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-3">
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
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {project.team.map((member, i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-background"
                            >
                              {member}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(project.dueDate)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Link
                      href={`/dashboard/projects/${project.id}`}
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Completed Projects Tab */}
          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {completedProjects.map((project) => (
                <Card key={project.id} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${project.color}`}
                      ></div>
                      <CardTitle className="text-lg truncate">
                        {project.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-3">
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
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {project.team.map((member, i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-background"
                            >
                              {member}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(project.dueDate)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Link
                      href={`/dashboard/projects/${project.id}`}
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onCreateProject={(newProject) => {
          setProjects([...projects, newProject]);
          setIsNewProjectModalOpen(false);
        }}
      />
    </>
  );
}
