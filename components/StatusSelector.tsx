"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const StatusSelector = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const gender = searchParams.get("gender");

  const data = [
    { name: "Alive", active: status === "Alive" },
    { name: "Dead", active: status === "Dead" },
    { name: "unknown", active: status === "unknown" },
  ];

  const handleLinkClick = (statusName: string) => {
    if (status === statusName) {
      return `/?${gender ? `gender=${gender}&` : ""}`;
    } else {
      return `/?status=${statusName}&${gender ? `gender=${gender}` : ""}`;
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {data.map((item, i) => (
        <Link key={i} href={handleLinkClick(item.name)}>
          <div
            className={`px-4 py-2 rounded ${
              item.active ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StatusSelector;
