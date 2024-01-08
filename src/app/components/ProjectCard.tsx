'use client';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
const ProjectCard = ({ project }: { project: Project }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };
  const container2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: -10 },
  };

  return (
    <div
      className='mt-10 cursor-pointer md:mt-0'
      // onClick={() => window.open(project.url, "_blank")}
    >
      <Drawer>
        <DrawerTrigger>
          <div className='flex flex-col items-start'>
            <div>
              <Image
                width={0}
                height={0}
                sizes='100vw'
                className={` max-h-[700px] min-h-[263px] w-full select-none rounded-[10px] object-fill drop-shadow-2xl`}
                src={project?.imageUrl}
                placeholder='blur'
                blurDataURL={project?.imageUrl}
                alt='project-card'
              />
            </div>

            <span className='mt-3 text-lg font-medium'>{project?.title}</span>
            <span className='font-regular text-sm text-prim'>
              {project?.description}{' '}
            </span>
          </div>
        </DrawerTrigger>
        <DrawerContent className='h-full rounded-none px-10'>
          <DrawerClose className='absolute right-5 top-5 z-10 rounded-xl bg-gray-100 px-3 py-2 font-semibold'>
            Go Back
          </DrawerClose>

          <div className='no-scrollbar flex h-auto w-full flex-col gap-10 overflow-y-auto py-10 lg:relative lg:flex-row-reverse '>
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              className='flex w-full flex-col gap-5 lg:sticky lg:inset-0 lg:w-2/5 '
            >
              <motion.div variants={item}>
                <Image
                  width={70}
                  height={70}
                  className={`rounded-lg border border-gray-200`}
                  src={project?.content?.icon}
                  alt='project-icon'
                />
              </motion.div>

              <motion.span
                variants={item}
                className='text-xl font-bold '
              >
                {project?.content?.title}
              </motion.span>
              <motion.p
                variants={item}
                className='text-lg'
              >
                {project?.content?.description}
              </motion.p>

              <motion.a
                variants={item}
                href={project?.content?.url}
                className='cursor-pointer text-sm underline'
              >
                View Live
              </motion.a>

              <motion.div
                variants={item}
                className='text-sm'
              >
                <Separator />
                <div className='flex gap-x-20 py-3'>
                  <p className='min-w-[100px] text-gray-500'>Stack: </p>
                  <p>{project?.content?.stack}</p>
                </div>
                <Separator />
                <div className='flex gap-x-20 py-3'>
                  <p className='min-w-[100px] text-gray-500'>Industry: </p>
                  <p>{project?.content?.industry}</p>
                </div>
                <Separator />
                <div className='flex gap-x-20 py-3'>
                  <p className='min-w-[100px] text-gray-500'>Services:</p>
                  <p>{project?.content?.services}</p>
                </div>
                <Separator />
              </motion.div>
            </motion.div>
            <motion.div
              variants={container2}
              initial='hidden'
              animate='show'
              className='flex h-fit flex-col gap-10 lg:w-3/5'
            >
              {project?.content?.pictures?.map(
                (picture: Picture, index: number) => (
                  <motion.div
                    variants={item}
                    key={index}
                    className='flex flex-col items-start'
                  >
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      className={` max-h-[700px] min-h-[263px] w-full select-none rounded-[10px] object-fill `}
                      src={picture?.imageUrl}
                      placeholder='blur'
                      blurDataURL={picture?.imageUrl}
                      alt='project-card'
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProjectCard;
