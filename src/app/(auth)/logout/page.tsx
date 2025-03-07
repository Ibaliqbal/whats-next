"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";

export default function LogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      setIsLoggingOut(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6">
        {isLoggingOut ? (
          <div className="space-y-4">
            <Loader2 className="mx-auto h-16 w-16 animate-spin text-primary" />
            <h1 className="text-2xl font-semibold">Logging you out...</h1>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <LogOut className="mx-auto h-24 w-24 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight">
                You&apos;ve been logged out
              </h1>
              <p className="text-muted-foreground">
                Thank you for using what&apos;snext. We hope to see you again soon!
              </p>
            </div>
            <Button onClick={handleReturnHome} size="lg">
              Return to Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
