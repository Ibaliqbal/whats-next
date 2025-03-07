export const statusColors = {
  "To Do": "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "In Progress":
    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Done: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  Blocked: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
