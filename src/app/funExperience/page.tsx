"use client";

import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
import { funExperience } from "@/contents/funExperience";
import Image from "next/image";


export default function Blogs() {
  return (
    <section className="md:py-10 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="md:text-3xl text-2xl font-bold  md:mb-12 mb-8 text-center"
          {...fadeInUp}
        >
          Fun Experience
        </motion.h2>

        <motion.p
          className="text-lg text-secondary md:mb-24 mb-15 text-center text-justify md:text-center px-4 md:px-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Each moment captured here is more than a memory — it’s a chapter of
          experience, shaped by nature, purpose, and celebration. From trails
          that test the spirit, to formal expressions of self, from earned
          victories to serene coastlines — this collection reflects a journey of
          growth, intention, and the joy of being present in every step.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {funExperience.map((fun) => (
            <motion.article
              key={fun.slug}
              className="bg-gray-50 dark:bg-dark/50 rounded-lg shadow-md md:w-70 w-80 md:h-105 "
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative w-full aspect-[4/3] mb-6 rounded-t-lg overflow-hidden">
                <Image
                  src={fun.image}
                  alt={fun.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <Link href={`/funs/${fun.slug}`}>
                <motion.h3
                  className="text-xl font-semibold mb-1 hover:text-primary transition-colors px-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {fun.title}
                </motion.h3>
              </Link>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {fun.excerpt}
              </motion.p>
              <motion.div
                className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="mr-2" />
                  {new Date(fun.date).toLocaleDateString()}
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        ></motion.div>
      </div>
    </section>
  );
}
