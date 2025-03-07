export type Task = {
  id: string;
  title: string;
  description: string;
  priority: string;
  project: string;
  assignee: string;
  dueDate: string;
  blockedReason?: string;
  status?: string;
};
