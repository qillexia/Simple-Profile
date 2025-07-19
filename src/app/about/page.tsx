'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto md:py-12 py-6">
      <motion.h1
        className="md:text-3xl text-2xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-justify text-lg text-secondary max-w-3xl mx-auto text-center px-4 md:px-0">
          I'am an undergraduate student majoring in Informatics Engineering at Universitas Kuningan, currently in my third semester. Throughout my academic journey, I have explored web development using HTML and CSS to structure and style user interfaces, and I’ve gained programming experience with Java, C++, and Python. I have a strong interest in technology — from programming logic to interface design — and I’m continuously learning to deepen my skills. I’m passionate about building meaningful digital solutions and open to collaborating on innovative and impactful projects.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-13" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2
          className="md:text-3xl text-2xl font-bold md:mb-5 mb-0 text-center"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gapx-15 py-10 justify-items-center gap-8 md:gap-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-gray-50 dark:bg-dark/50 p-8 w-80 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex d-flex items-center gap-4 ">
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 dark:bg-dark/50 p-8 w-80 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex d-flex items-center gap-4 ">
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>Php</li>
              <li>Java</li>
              <li>MySql</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 dark:bg-dark/50 p-8 w-80 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex d-flex items-center gap-4 ">
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tools & Others</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Laragon</li>
              <li>VsCode</li>
              <li>NetBean</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <div className="justify-items-center mb-8">
          <motion.h2
            className="md:text-3xl text-2xl section-title"
            {...fadeInUp}
          >
            Education
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-gray-50 w-80 items-center dark:bg-dark/50 px-8 py-10 rounded-lg shadow-md md:w-full mb-8"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">
                High school majoring in industrial automation engineering
              </h3>
              <p className="text-primary mb-2">
                SMK Negeri 3 Kuningan • 2020 - 2023
              </p>
              <p className="text-secondary text-justify">
                Focused on Industrial Automation, with hands-on experience in
                PLC programming and control systems.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 w-80 items-center dark:bg-dark/50 px-10 py-10 rounded-lg shadow-md md:w-full"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary mb-2">
                University Kuningan • 2024 - Now
              </p>
              <p className="text-secondary text-justify">
                Currently in 3rd semester, learning core programming languages
                such as Java, C++, Python, as well as web development with HTML
                and CSS and others.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 