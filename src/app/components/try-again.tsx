import { AlertCircle } from "lucide-react";

export function TryAgain({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex h-full min-h-[100dvh-5px] w-full flex-col items-center justify-center">
      <AlertCircle className="mb-4 h-16 w-16 text-red-500" />
      <p className="mb-6 max-w-md text-center text-lg text-gray-600">
        Something went wrong. Please try again or contact support if the issue
        persists.
      </p>
      <button
        onClick={onRetry}
        className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
