'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    // ...existing code...
    <section className="md:py-22 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10">
            {/* Gambar */}
            <motion.div
              className="flex justify-center items-center mb-3 md:mb-0"
              {...scaleIn}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/Haqil.jpg"
                alt="Profile"
                width={1000}
                height={1000}
                className="rounded-full md:w-60 w-55 md:h-60 h-55 object-cover ring-2 ring-primary md:mr-15"
              />
            </motion.div>

            {/* Teks & Tombol */}
            <div>
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-5"
                {...fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Hi, I&apos;m{" "}
                <motion.span
                  className="text-primary"
                  {...fadeIn}
                  transition={{ delay: 0.8 }}
                >
                  Haqil Abdillah
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-6 px-8 text-justify md:text-left md:px-0"
                style={{ textAlignLast: "center" }}
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Informatics Student | Junior Front End Developer | Learn To Be A
                Programmer
              </motion.p>

              {/* Icon Sosmed */}
              <motion.div
                className="flex justify-center md:justify-start space-x-4 md:mb-6 mb-10"
                {...fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://github.com/Qillexia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/haqilabd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </motion.a>
              </motion.div>

              {/* Tombol */}
              <motion.div
                className="flex flex-col md:flex-row justify-center md:justify-start gap-4"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="bg-primary inline-block w-70 md:w-auto text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View My Little App
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block w-70 md:w-auto bg-gray-500 text-white px-6 py-2 rounded-lg dark:hover:bg-gray-600 transition-colors"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // ...existing code...
  );
} 