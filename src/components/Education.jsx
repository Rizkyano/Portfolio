import React from "react";
import RevoU from "../assets/Profile/RevoU.png";
import PNJ from "../assets/Profile/PNJ.png";
import AeU from "../assets/Profile/AeU.webp";

const people = [
  {
    name: "RevoU Bootcamp",
    email: "Fullstack Software Engineering",
    role: "July, 2024 – December, 2024",
    imageUrl: RevoU,
  },
  {
    name: "Jakarta State Polytechnic ",
    email: "Bachelor of Information and Communication Technology (BICT)",
    role: "September, 2019 – September, 2023",
    imageUrl: PNJ,
  },
  {
    name: "Asia e University ",
    email: "Bachelor of Information and Communication Technology (BICT)",
    role: "September, 2019 – September, 2023",
    imageUrl: AeU,
  },
];

export default function Education() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
