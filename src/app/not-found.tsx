import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Frown, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <Frown className="mx-auto h-24 w-24 text-muted-foreground" />
          <h1 className="text-4xl font-bold tracking-tight">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
