import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 mx-auto max-w-6xl px-6 text-center min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-extrabold text-foreground">404</h1>
      <p className="text-lg text-muted max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
