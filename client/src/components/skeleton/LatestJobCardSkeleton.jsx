export default function LatestJobCardSkeleton() {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-5 card-shadow border border-transparent">
      {/* Company Logo Skeleton */}
      <div className="w-14 h-14 bg-gray-200 rounded-xl animate-pulse flex-shrink-0"></div>

      {/* Job Info Skeleton */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Job Title Skeleton */}
        <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/5 animate-pulse"></div>

        {/* Company & Location Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-2/5 mt-1 animate-pulse"></div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
