export function ListingSkeleton() {
  return (
    <div className="flex w-full flex-col gap-2 overflow-clip rounded-2xl bg-white">
      <div className="h-40 w-full animate-pulse bg-gray-200"></div>
      <div className="flex flex-wrap items-start justify-between gap-6 p-4">
        <div className="flex w-full flex-1 flex-col gap-2">
          <div className="h-3 w-[70%] animate-pulse rounded-xl bg-gray-200"></div>
          <div className="h-3 w-[30%] animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-3 w-[80%] animate-pulse rounded-2xl bg-gray-200"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-9 animate-pulse rounded-full bg-gray-200"></div>
          <div className="size-9 animate-pulse rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
