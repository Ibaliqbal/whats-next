"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, Search, Mail, Phone, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NewTeamModal } from "./_components/new-team-modal";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
};

type Team = {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
};

const initialTeams: Team[] = [
  {
    id: "1",
    name: "Design Team",
    description: "Responsible for UI/UX and graphic design across all projects",
    members: [
      {
        id: "1",
        name: "Alice Johnson",
        role: "UI/UX Designer",
        email: "alice@example.com",
        phone: "+1 234 567 890",
        avatar:
          "https://vercel.com/api/www/avatar/1_5f7f8f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      },
      {
        id: "2",
        name: "Bob Smith",
        role: "Graphic Designer",
        email: "bob@example.com",
        phone: "+1 234 567 891",
        avatar:
          "https://vercel.com/api/www/avatar/2_5f7f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      },
    ],
  },
  {
    id: "2",
    name: "Development Team",
    description:
      "Handles all aspects of software development and implementation",
    members: [
      {
        id: "3",
        name: "Charlie Brown",
        role: "Frontend Developer",
        email: "charlie@example.com",
        phone: "+1 234 567 892",
        avatar:
          "https://vercel.com/api/www/avatar/3_5f7f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      },
      {
        id: "4",
        name: "Diana Evans",
        role: "Backend Developer",
        email: "diana@example.com",
        phone: "+1 234 567 893",
        avatar:
          "https://vercel.com/api/www/avatar/4_5f7f8f8f8f8f8f8f8f8f8f8f8f8f?s=64",
      },
    ],
  },
];

export default function TeamPage() {
  const [teams, setTeams] = useState(initialTeams);
  const [isNewTeamModalOpen, setIsNewTeamModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Teams</h1>
            <p className="text-muted-foreground">
              Manage your teams and team members
            </p>
          </div>
          <Button onClick={() => setIsNewTeamModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Team
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search teams..."
              className="w-full pl-8"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <Card key={team.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.description}</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit Team</DropdownMenuItem>
                      <DropdownMenuItem>Add Member</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Delete Team
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {team.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center space-x-3"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {member.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <NewTeamModal
        isOpen={isNewTeamModalOpen}
        onClose={() => setIsNewTeamModalOpen(false)}
        onCreateTeam={(newTeam) => {
          setTeams([...teams, newTeam]);
          setIsNewTeamModalOpen(false);
        }}
      />
    </>
  );
}