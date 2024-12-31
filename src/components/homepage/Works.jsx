import ibgroup from "/src/assets/images/P-1.webp";
import memento from "/src/assets/images/P-2.webp";
import acc from "/src/assets/images/P-4.webp";
import daddy from "/src/assets/images/P-3.webp";
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
            link="https://sketch-book-delta.vercel.app/"
            img={ibgroup}
            alt="IBGroup vietnam website mockup"
            name="SketchBook - a Drawing Tool"
            type="Frontend Development"
            year="2023"
            tools="• TailwindCSS • JavaScript  "

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://echo-meet-six.vercel.app/"
            img={memento}
            alt="EchoMeet"
            name="EchoMeet"
            type="Frontend Development"
            year="2023"
            tools="• TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://samishaikh05687.github.io/Tic-Tac-Toe/"
            img={acc}
            alt="Tic-Tac-Toe Game"
            name="Tic-Tac-Toe Game"
            type="Frontend Development"
            year="2022"
            tools="TailwindCSS • ReactJs"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://samishaikh05687.github.io/Sun-down-web/"
            img={daddy}
            alt="SunDown Studio Web"
            name="SunDown Studio Web"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
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
