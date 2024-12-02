'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const GenderSelector = () => {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const status = searchParams.get('status');

  const data = [
    { name: "Male", active: gender === "Male" },
    { name: "Female", active: gender === "Female" },
    { name: "Genderless", active: gender === "Genderless" },
    { name: "unknown", active: gender === "unknown" },
  ];

  const handleLinkClick = (genderName: string) => {
    if (gender === genderName) {
      return `/?${status ? `status=${status}&` : ""}`;
    } else {
      return `/?${status ? `status=${status}&` : ""}gender=${genderName}`;
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

export default GenderSelector;
