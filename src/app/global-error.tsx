"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
          <h1 className="text-4xl font-extrabold">Something went wrong</h1>
          <p className="text-gray-600">A critical error occurred.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#f0885b] text-white rounded-full font-semibold hover:bg-[#e0784b] transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
