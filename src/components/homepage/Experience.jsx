import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import HeadingSVG from "../ui/HeadingSVG";

export default function Internship({ forwardedRef }) {
  const internshipSection = useRef(null);
  const heading = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: internshipSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1 },
          0
        )
        .fromTo(
          cards.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power4.out",
            duration: 1,
            stagger: 0.3, // animate one by one
          },
          0.2
        ),
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      ref={el => {
        internshipSection.current = el;
        if (typeof forwardedRef === "function") {
          forwardedRef(el);
        } else if (forwardedRef) {
          forwardedRef.current = el;
        }
      }}
       
      id="internship"
      className="my-[15%]"
      aria-label="internship experience"
    >
      <div className="flex w-full justify-center mb-10">
        <div
          ref={heading}
          className="heading flex translate-y-10 opacity-0 items-center justify-center space-x-[3%]"
        >
          <HeadingSVG />
          <h2 className="w-fit text-4xl sm:text-heading-2 font-medium uppercase text-secondary-600">
            Experience
          </h2>
          <HeadingSVG />
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-8">
        {/* Internship Card 1 */}
        <div
          ref={(el) => (cards.current[0] = el)}
          className="w-full border border-gray-300 dark:border-neutral-700 rounded-2xl p-6 backdrop-blur-sm bg-transparent shadow-md hover:scale-105 transition-all ease-linear duration-200"
        >
          <h3 className="text-2xl font-semibold text-black">
            HireXzo Solutions – Talent ID
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Internship | Jan 2024 – Apr 2024
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-base list-disc list-inside">
            <li>
              Developed a responsive web application using ReactJS and
              TailwindCSS, improving user engagement by 15%.
            </li>
            <li>
              Integrated CAPTCHA security into the login process, enhancing
              security while keeping UX smooth.
            </li>
            <li>
              Implemented graphical data visualization on the dashboard for
              data-driven decision-making.
            </li>
          </ul>
        </div>

        {/* Internship Card 2 */}
        <div
          ref={(el) => (cards.current[1] = el)}
          className="w-full border border-gray-300 dark:border-neutral-700 rounded-2xl p-6 backdrop-blur-sm bg-transparent shadow-lg hover:scale-105 transition-all ease-linear duration-200"
        >
          <h3 className="text-2xl font-semibold text-black">
            TCS – Graduate Trainee
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Placement | 2025 – Present
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-base list-disc list-inside">
            <li>
              Focused on full stack development, including frontend (ReactJS,
              Next.js) and backend (Node.js, Express.js).
            </li>
            <li>
              Worked with databases like SQL and MongoDB to design efficient
              schemas.
            </li>
            <li>
              Collaborated in an Agile environment, using Git/GitHub for version
              control.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
