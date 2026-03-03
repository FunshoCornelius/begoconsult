"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-28 pb-20 mx-auto max-w-6xl px-6 text-center min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-extrabold text-foreground">
        Something went wrong
      </h1>
      <p className="text-muted max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={() => reset()} size="lg">
        Try Again
      </Button>
    </div>
  );
}
