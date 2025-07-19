"use client";

import Image from "next/image";
import { funExperience } from "@/contents/funExperience";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function Funs() {
  return (
    <section className="md:py-20 py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="md:text-3xl text-2xl font-bold  mb-12 text-center"
          {...fadeInUp}
        >
          Fun Experience
        </motion.h2>

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
