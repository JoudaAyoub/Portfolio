import { easeInOut, motion } from 'framer-motion';
const variants = {
  in: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: -10 },
};

export default function HeroSection() {
  return (
    <motion.div
      initial={variants.in}
      animate={variants.animate}
      transition={{ ease: easeInOut }}
      className='relative mt-[90px] flex w-full justify-center'
    >
      <h1 className='relative z-[2]  select-none  text-[65px] font-semibold leading-[64px] tracking-tighter sm:text-[90px] sm:leading-[80px] md:text-[100px] md:leading-[80px] lg:text-[120px] lg:leading-[104px] '>
        <span className='relative  after:absolute after:-right-10 after:-top-5 after:z-[-1] after:scale-50 after:content-foodicon md:after:top-2 md:after:scale-100'>
          Curious,
        </span>
        <br />{' '}
        <span className='relative  after:absolute after:-right-20 after:-top-2 after:z-[-1] after:scale-50 after:content-greenicon md:after:-right-24  md:after:top-5 md:after:scale-100 '>
          engineer,
        </span>
        <br />
        <span className='relative  before:absolute before:-left-10 before:top-5 before:z-[-1] before:scale-50 before:content-reacticon md:before:top-24 md:before:scale-100 '>
          app creator,{' '}
        </span>
        <br /> storyteller
      </h1>
    </motion.div>
  );
}
