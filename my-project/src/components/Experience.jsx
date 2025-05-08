const people = [
  {
    name: "Graphic Design Internship",
    email: "O2 Consulting",
    role: "September, 2024 – December, 2024",
    job: [
      "Creating Proposals Using PowerPoint",
      "Conceptualizing and Creating Content for the Company’s Instagram",
      "Creating and Designing Visual Materials for Clients and the Company",
      "Enhancing Brand Communication Through Visual Storytelling ",
    ],
  },
  {
    name: "Graphic Design Internship",
    email: "More Design",
    role: "May, 2023 – August, 2023",
    job: ["Assisting the Marketing Team in Creating Graphics", "Designing and Creating Digital Posters, Banners, and Standees", "Designing and Creating Price Tags", "Creating Cohesive and Impactful Visual Branding"],
  },
  {
    name: "Graphic Design Freelance",
    email: "Intonate",
    role: "October, 2022 – December, 2022",
    job: ["Creating and Designing Logos ", "Creating and Designing Digital Posters", "Producing All Instagram Posts for Intonate", "Designing Engaging Social Media Visuals"],
  },
];

export default function experience() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-3xl/6 font-semibold text-gray-900">{person.name}</p>
              <p className="mt-3  text-2xl/5 text-gray-500">{person.email}</p>
              <ul className="mt-3 ml-6 text-lg/5 list-disc text-gray-500">
                {person.job.map((item, index) => (
                  <li className="mt-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
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
