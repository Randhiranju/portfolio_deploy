import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
//import higher order components
import { SectionWrapper } from '../hoc'

//creating new function component for service
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    {/* creating cards using framer-motion */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
    {/*text variant is a utility function to antimate text */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] mx-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with Experience in Javascript, Typescript and expertise in frameworks and libraries like Next, React and Node.Js. I also have basic Experience with cloud technologies like AWS and CRM tool SalesForce. I am quick learner and collaborative to create efficient,scalable and user-friendly solutions to real-world problems. I am always keen towards solving real-world problems using latest Tech Stacks.
      </motion.p>

      {/*cards  ...services spreads the services*/}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}
//in sectionWrapper first provide component then id
export default SectionWrapper (About,"about")
  

