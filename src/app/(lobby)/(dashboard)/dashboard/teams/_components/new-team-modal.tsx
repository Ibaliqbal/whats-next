"use client";

import type React from "react";

import { useState } from "react";
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

type NewTeamModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreateTeam: (newTeam: any) => void;
};

export function NewTeamModal({
  isOpen,
  onClose,
  onCreateTeam,
}: NewTeamModalProps) {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTeam = {
      id: Date.now().toString(),
      name: teamName,
      description: teamDescription,
      members: [],
    };
    onCreateTeam(newTeam);
    setTeamName("");
    setTeamDescription("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="teamName">Team Name</Label>
              <Input
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
                required
              />
            </div>
            <div>
              <Label htmlFor="teamDescription">Team Description</Label>
              <Textarea
                id="teamDescription"
                value={teamDescription}
                onChange={(e) => setTeamDescription(e.target.value)}
                placeholder="Enter team description"
                required
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create Team</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
