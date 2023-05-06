import { easeInOut, motion } from "framer-motion";
const variants = {
  in: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: -10 },
};

export default function HeroSection({}) {
  return (
    <motion.div
      initial={variants.in}
      animate={variants.animate}
      transition={{ ease: easeInOut }}
      className="w-full relative flex justify-center mt-[90px]"
    >
      <h1 className="relative font-semibold  text-[55px] z-[2] leading-[64px]  md:text-[120px] md:leading-[104px] tracking-tighter select-none ">
        <span className="after:content-foodicon  after:absolute relative md:after:scale-100 after:scale-50 after:-right-10 after:-top-5 md:after:top-2 after:z-[-1]">
          Curious,
        </span>
        <br />{" "}
        <span className="after:content-greenicon  after:absolute after:scale-50 md:after:scale-100 relative after:-right-20 after:-top-2 md:after:top-5  md:after:-right-24 after:z-[-1] ">
          engineer,
        </span>
        <br />
        <span className="before:content-reacticon  before:scale-50 md:before:scale-100 before:absolute relative before:-left-10 before:top-5 md:before:top-24 before:z-[-1] ">
          app creator,{" "}
        </span>
        <br /> storyteller
      </h1>
    </motion.div>
  );
}
