"use client";

import { useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center gap-4 h-full py-10 xl:mt-0 xl:my-0">
      <h1 className="text-2xl">
        <span className="font-medium">404</span>
        &emsp;&emsp;Project ID does not exist.
      </h1>
    </div>
  );
}
