"use client";

import { useState } from "react";
import {
  format,
  startOfMonth,
  eachDayOfInterval,
  isToday,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addMonths,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight, Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Dummy data
const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2025-03-10T10:00:00",
    type: "meeting",
  },
  {
    id: 2,
    title: "Project Deadline",
    date: "2025-03-15T23:59:59",
    type: "deadline",
  },
  {
    id: 3,
    title: "Client Call",
    date: "2025-03-12T14:30:00",
    type: "meeting",
  },
  {
    id: 4,
    title: "Dentist Appointment",
    date: "2025-03-18T09:00:00",
    type: "personal",
  },
  {
    id: 5,
    title: "Design Review",
    date: "2025-03-10T15:00:00",
    type: "meeting",
  },
  {
    id: 6,
    title: "Submit Proposal",
    date: "2025-03-22T17:00:00",
    type: "deadline",
  },
  {
    id: 7,
    title: "Weekly Standup",
    date: "2025-03-17T09:30:00",
    type: "meeting",
  },
  {
    id: 8,
    title: "Code Review",
    date: "2025-03-19T11:00:00",
    type: "meeting",
  },
  {
    id: 9,
    title: "Birthday Party",
    date: "2025-03-25T18:00:00",
    type: "personal",
  },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isEventListOpen, setIsEventListOpen] = useState(false);
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const days = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
    setIsEventListOpen(true);
  };

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => isSameDay(new Date(event.date), date));
  };

  return (
    <div className="space-y-4 p-4 md:p-8 pt-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Schedule and manage your tasks and events.
          </p>
        </div>
        <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Event</DialogTitle>
              <DialogDescription>
                Add a new event to your project calendar.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-title" className="text-right">
                  Title
                </Label>
                <Input id="event-title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-date" className="text-right">
                  Date
                </Label>
                <Input id="event-date" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-project" className="text-right">
                  Project
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-redesign">
                      Website Redesign
                    </SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="marketing-campaign">
                      Marketing Campaign
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>{format(currentDate, "MMMM yyyy")}</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={previousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-[1px] overflow-hidden rounded-lg border bg-border text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="bg-background py-2 font-medium text-muted-foreground"
              >
                {day}
              </div>
            ))}
            {Array.from({ length: firstDayOfMonth.getDay() }).map(
              (_, index) => (
                <div
                  key={`empty-start-${index}`}
                  className="bg-background p-2 min-h-[80px] border border-border/50"
                />
              )
            )}
            {days.map((day, dayIdx) => {
              const dayEvents = getEventsForDate(day);
              return (
                <div
                  key={day.toString()}
                  className={cn(
                    "relative bg-background p-2 min-h-[80px] border border-border/50",
                    "cursor-pointer transition-colors hover:bg-muted",
                    !isSameMonth(day, currentDate) && "text-muted-foreground"
                  )}
                  onClick={() => handleDateClick(day)}
                >
                  <time
                    dateTime={format(day, "yyyy-MM-dd")}
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full",
                      isToday(day) &&
                        "bg-primary text-primary-foreground font-semibold"
                    )}
                  >
                    {format(day, "d")}
                  </time>
                  {dayEvents.length > 0 && (
                    <AlertCircle className="absolute top-1 right-1 h-4 w-4 text-yellow-500" />
                  )}
                </div>
              );
            })}
            {Array.from({
              length: (7 - ((days.length + firstDayOfMonth.getDay()) % 7)) % 7,
            }).map((_, index) => (
              <div
                key={`empty-end-${index}`}
                className="bg-background p-2 min-h-[80px] border border-border/50"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEventListOpen} onOpenChange={setIsEventListOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Events for {selectedDate && format(selectedDate, "MMMM d, yyyy")}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedDate &&
              getEventsForDate(selectedDate).map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(event.date), "h:mm a")}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      event.type === "meeting" && "bg-blue-100 text-blue-700",
                      event.type === "deadline" && "bg-red-100 text-red-700",
                      event.type === "personal" && "bg-green-100 text-green-700"
                    )}
                  >
                    {event.type}
                  </div>
                </div>
              ))}
            {selectedDate && getEventsForDate(selectedDate).length === 0 && (
              <p>No events scheduled for this day.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Your next 5 scheduled events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.slice(0, 5).map((event) => (
              <div key={event.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(event.date), "MMM d, yyyy 'at' h:mm a")}
                  </p>
                </div>
                <div
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    event.type === "meeting" && "bg-blue-100 text-blue-700",
                    event.type === "deadline" && "bg-red-100 text-red-700",
                    event.type === "personal" && "bg-green-100 text-green-700"
                  )}
                >
                  {event.type}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
