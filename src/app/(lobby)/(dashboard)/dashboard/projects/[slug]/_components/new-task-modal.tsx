"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Task } from "@/types/task";

type NewTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (newTask: Task) => void;
  editingTask: Task | null;
};

export function NewTaskModal({
  isOpen,
  onClose,
  onCreateTask,
  editingTask,
}: NewTaskModalProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("To Do");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskTitle(editingTask.title);
      setTaskDescription(editingTask.description);
      setTaskPriority(editingTask.priority);
      setTaskStatus(editingTask.status || "To Do");
      setTaskAssignee(editingTask.assignee);
      setTaskDueDate(editingTask.dueDate);
    } else {
      resetForm();
    }
  }, [editingTask]);

  const resetForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("");
    setTaskStatus("To Do");
    setTaskAssignee("");
    setTaskDueDate("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      status: taskStatus,
      assignee: taskAssignee,
      dueDate: taskDueDate,
      project: "Current Project", // You might want to pass this as a prop
    };
    onCreateTask(newTask);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingTask ? "Edit Task" : "Create New Task"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="taskTitle">Task Title</Label>
              <Input
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
                required
              />
            </div>
            <div>
              <Label htmlFor="taskDescription">Task Description</Label>
              <Textarea
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter task description"
                required
              />
            </div>
            <div>
              <Label htmlFor="taskPriority">Priority</Label>
              <Select value={taskPriority} onValueChange={setTaskPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="taskStatus">Status</Label>
              <Select value={taskStatus} onValueChange={setTaskStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="To Do">To Do</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="taskAssignee">Assignee</Label>
              <Input
                id="taskAssignee"
                value={taskAssignee}
                onChange={(e) => setTaskAssignee(e.target.value)}
                placeholder="Enter assignee name"
                required
              />
            </div>
            <div>
              <Label htmlFor="taskDueDate">Due Date</Label>
              <Input
                id="taskDueDate"
                type="date"
                value={taskDueDate}
                onChange={(e) => setTaskDueDate(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {editingTask ? "Update Task" : "Create Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
