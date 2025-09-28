import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Full Stack Development",
    "Frontend Engineering",
    "Backend Development",
    "API Integration",
    "Database Management",
    "Scalable Web Applications",
  ];

  // ToolBox items for the UI
  const toolBoxItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git & GitHub",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
       <ServiceUi
  title="My Expertise."
  description="I specialize in developing end-to-end web applications with a focus on performance, scalability, and clean architecture. 
  My expertise lies in building dynamic user interfaces, implementing secure backend systems, and ensuring seamless API integrations. 
  I have experience designing database schemas, optimizing queries for efficiency, and delivering solutions that follow modern development practices 
  like Agile and CI/CD pipelines."
  items={expertiseItems}
/>

<ServiceUi
  title="My Tech Stack."
  description="My tech stack combines frontend and backend technologies to deliver robust full stack solutions. 
  On the frontend, I work with ReactJS, Next.js, and TailwindCSS to create responsive and user-friendly UIs. 
  On the backend, I utilize Node.js, Express.js, and database systems like MongoDB and SQL to manage data flow and server-side logic. 
  I also leverage version control with Git/GitHub and follow industry best practices to ensure maintainability and scalability of applications."
  items={toolBoxItems}
/>

      </div>
    </section>
  );
}
