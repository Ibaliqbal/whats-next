"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlignLeft,
  BarChart2,
  Bell,
  Calendar,
  CheckSquare,
  FileText,
  Home,
  Inbox,
  Layers,
  Layers2,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: Layers2,
      active: pathname === "/dashboard/projects",
    },
    {
      name: "Tasks",
      href: "/dashboard/tasks",
      icon: ListTodo,
      active: pathname === "/dashboard/tasks",
      badge: "12",
    },
    {
      name: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
      active: pathname === "/dashboard/calendar",
    },
    {
      name: "Team",
      href: "/dashboard/teams",
      icon: Users,
      active: pathname === "/dashboard/team",
    },
    {
      name: "Files",
      href: "/dashboard/files",
      icon: FileText,
      active: pathname === "/dashboard/files",
    },
    {
      name: "Reports",
      href: "/dashboard/reports",
      icon: BarChart2,
      active: pathname === "/dashboard/reports",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      active: pathname === "/dashboard/settings",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <Link href={"/"} className="flex items-center gap-2 px-4 py-2">
              <Logo className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">What&apos;sNext</span>
            </Link>
          </SidebarHeader>
          <ScrollArea className="flex-grow">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigation.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.active}
                          tooltip={item.name}
                        >
                          <Link href={item.href}>
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                        {item.badge && (
                          <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </ScrollArea>
          <SidebarFooter>
            <div className="flex items-center justify-between px-4 py-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 hover:bg-transparent"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 text-left">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="start" side="top">
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" className="justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <div className="w-full flex-1">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <AlignLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <Link href={"/"} className="flex items-center gap-2 border-b p-4">
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">what&apos;snext</span>
                  </Link>
                  <div className="flex h-full flex-col">
                    <nav className="grid gap-2 py-4">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        <Home className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/projects"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        <Layers className="h-4 w-4" />
                        Projects
                      </Link>
                      <Link
                        href="/dashboard/tasks"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        <CheckSquare className="h-4 w-4" />
                        Tasks
                      </Link>
                      <Link
                        href="/dashboard/calendar"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        <Calendar className="h-4 w-4" />
                        Calendar
                      </Link>
                      <Link
                        href="/dashboard/inbox"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        <Inbox className="h-4 w-4" />
                        Inbox
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
              <SidebarTrigger className="hidden md:flex" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <ThemeToggle align="end" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-7 w-7 cursor-pointer">
                    <AvatarImage src={`https://avatar.vercel.sh/johndoe`} />
                    <AvatarFallback>J</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
