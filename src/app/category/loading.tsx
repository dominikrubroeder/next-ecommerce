export default function Loading() {
  return (
    <div className="p-4">
      <div className="h-8 w-full max-w-xs animate-pulse rounded-full bg-gray-100"></div>

      <ul className="mt-4 grid gap-4">
        <li>
          <div className="h-6 w-full max-w-[12rem] animate-pulse rounded-full bg-gray-100"></div>
        </li>

        <li>
          <div className="h-6 w-full max-w-[12rem] animate-pulse rounded-full bg-gray-100"></div>
        </li>

        <li>
          <div className="h-6 w-full max-w-[12rem] animate-pulse rounded-full bg-gray-100"></div>
        </li>

        <li>
          <div className="h-6 w-full max-w-[12rem] animate-pulse rounded-full bg-gray-100"></div>
        </li>
      </ul>
    </div>
  );
}
