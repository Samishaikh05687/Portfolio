import { useEffect, useRef } from "react";
import ProfileImg from "/src/assets/images/Profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={ProfileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
           <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0"> 
  I am a Computer Science Engineering graduate with strong problem-solving skills and a solid foundation in programming, software development, and system design.  
  <br /><br />
  Skilled in C++, C, Python, Java, JavaScript, ReactJS, Next.js, and modern Web Development practices, with hands-on experience in Data Structures & Algorithms, Object-Oriented Programming, and Database Management (SQL, MongoDB).  
  <br /><br />
  I am passionate about building scalable, efficient, and user-friendly applications while following industry best practices in Agile development, version control (Git/GitHub), and cloud-based technologies.  
  <br /><br />
  I thrive in collaborative environments and enjoy exploring new technologies such as DevOps tools, RESTful APIs, and AI/ML concepts to continuously expand my skill set. My goal is to contribute effectively at TCS and grow into a versatile software engineer delivering impactful solutions.  
  <br /><br />
  I have actively participated in coding competitions and hackathons, including a 36-hour hackathon, where I developed innovative solutions under tight deadlines. These experiences strengthened my technical expertise, teamwork ability, and problem-solving approach in real-world scenarios.  
</p>

          </div>
        </div>
      </div>
    </section>
  );
}
