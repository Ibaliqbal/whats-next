"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileIcon, FolderIcon, MoreVertical, Upload } from "lucide-react";

const initialFiles = [
  {
    id: 1,
    name: "Project Proposal.docx",
    type: "file",
    size: "2.5 MB",
    lastModified: "2025-03-15",
  },
  {
    id: 2,
    name: "Design Assets",
    type: "folder",
    size: "-",
    lastModified: "2025-03-14",
  },
  {
    id: 3,
    name: "Meeting Notes.pdf",
    type: "file",
    size: "1.2 MB",
    lastModified: "2025-03-13",
  },
  {
    id: 4,
    name: "Budget Spreadsheet.xlsx",
    type: "file",
    size: "3.7 MB",
    lastModified: "2025-03-12",
  },
  {
    id: 5,
    name: "Client Feedback",
    type: "folder",
    size: "-",
    lastModified: "2025-03-11",
  },
];

export default function FilesPage() {
  const [files, setFiles] = useState(initialFiles);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Files</h1>
          <p className="text-muted-foreground">
            Manage and organize your project files
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload File
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    {file.type === "folder" ? (
                      <FolderIcon className="mr-2 h-4 w-4 text-blue-500" />
                    ) : (
                      <FileIcon className="mr-2 h-4 w-4 text-gray-500" />
                    )}
                    {file.name}
                  </div>
                </TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>{file.lastModified}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Move</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
