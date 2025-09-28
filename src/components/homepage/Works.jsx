import ibgroup from "/src/assets/images/Portfoilo.webp";
import memento from "/src/assets/images/daddy-4.jpg";
import acc from "/src/assets/images/daddy-2.jpg";
import daddy from "/src/assets/images/daddy-3.jpg";
import sunnyside from "/src/assets/images/P-5.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="selected works" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://sketchbook-v2-sable.vercel.app/"
            img={ibgroup}
            alt="sketch-book"
            name="SketchBook - a Drawing Tool"
            type="Full-Stack Development"
            year="2023"
            tools="• NextJs • Socket.Io • NodeJS • TailwindCSS "

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://contentra-research-agent.vercel.app/"
            img={daddy}
            alt="EchoMeet"
            name="Contentral - a research agent"
            type="Full Stack Development"
            year="2025"
            tools="• Nodejs • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://autonomous-ecom-ai-agent.vercel.app/"
            img={memento}
            alt="Ecommerce AI Agent"
            name="Ecommerce AI Agent    "
            type="Full Stack Development"
            year="2025"
            tools="• ReactJs • MongoDB • Gemini API "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://samishaikh05687/"
            img={acc}
            alt="Quinn AI"
            name="Quinn AI"
            type="Full Stack Development"
            year="2024"
            tools="• NextJs • Cohere AI • PostgreSQL "
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link=""
            img={sunnyside}
            alt="JYB LANDING PAGE"
            name="JYB LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
