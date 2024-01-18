import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group relative flex items-center gap-1">
      <svg
        width="32"
        height="32"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <g clipPath="url(#clip0_1_119)">
          <g mask="url(#mask0_1_119)">
            <path
              d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
              fill="black"
            />
            <path
              d="M106.317 112.014L49.1676 38.4H38.4V89.5787H47.0141V49.3394L99.5548 117.223C101.926 115.637 104.184 113.895 106.317 112.014Z"
              fill="url(#paint0_linear_1_119)"
            />
            <path
              d="M90.3111 38.4H81.7778V89.6H90.3111V38.4Z"
              fill="url(#paint1_linear_1_119)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_119"
            x1="77.5111"
            y1="82.8444"
            x2="102.756"
            y2="114.133"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_119"
            x1="86.0444"
            y1="38.4"
            x2="85.9015"
            y2="76"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_119">
            <rect width="128" height="128" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span className="font-bold">ext commerce</span>

      <div className="invisible absolute left-0 right-0 top-[2.75rem] w-max -translate-y-4 rounded-2xl border bg-gray-100 px-4 py-3 transition group-hover:visible group-hover:translate-y-0">
        Fun Project! Nothing official.
      </div>
    </Link>
  );
}
