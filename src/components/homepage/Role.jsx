import resume from "/src/assets/images/SamiResume.pdf";

export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="about"
      className="nav-change my-10 flex select-none flex-col items-center justify-center overflow-hidden py-10 md:my-[12%]"
      aria-label=""
    >
      <div className="flex w-full flex-col items-center space-x-20 ">
        <h1 className=" text-2xl leading-[30px] sm:text-5xl uppercase tracking-widest  text-secondary-400 md:leading-[1.08em] ">
          I Create elevating digital experiences,CRAFTING ELEGANT & <span className="font-black">MODERN
          DESIGNS</span>. BLENDING CREATIVITY WITH TECH — TO DELIVER <span className="font-black">CAPTIVATING</span> USER
          EXPERIENCES. that inspire and connect with people through <span className="font-black">development</span>
          and design.
        </h1><br /><br />
      </div>
        <div className="flex flex-col items-center justify-center">
        <p className=" uppercase text-secondary-400 tracking-wide sm:text-3xl">click to download my resume <br /><br /></p>
        <a href={resume} download="Resume">
          <span className="hover:bg-secondary-400 hover:text-black button sm:text-2xl">Resume</span>
          </a>
        </div>
    </section>
  );
}
