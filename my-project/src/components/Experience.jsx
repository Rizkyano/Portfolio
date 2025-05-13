const people = [
  {
    name: "Graphic Design Internship",
    email: "O2 Consulting",
    role: "September 2024 – December 2024",
    job: ["Creating Proposals Using PowerPoint", "Conceptualizing and Creating Content for Instagram", "Designing Visual Materials for Clients", "Enhancing Brand Communication Through Storytelling"],
  },
  {
    name: "Graphic Design Internship",
    email: "More Design",
    role: "May 2023 – August 2023",
    job: ["Creating Posters, Banners, and Price Tags", "Supporting Marketing Campaigns", "Designing Cohesive Visual Branding"],
  },
  {
    name: "Graphic Design Freelance",
    email: "Intonate",
    role: "October 2022 – December 2022",
    job: ["Creating Logos and Posters", "Managing Instagram Visuals", "Designing Social Media Graphics"],
  },
];

export default function Experience() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-gray-900">{person.name}</p>
            <p className="text-md text-gray-600">{person.email}</p>
            <ul className="list-disc ml-5 text-gray-500">
              {person.job.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-right text-gray-500 hidden sm:block">{person.role}</div>
        </li>
      ))}
    </ul>
  );
}
