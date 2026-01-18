'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4">
            About
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold">
            Building The Future
            <br />
            With Data
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                I'm a Data Analytics Engineering graduate student at Northeastern University
                with a perfect 4.0 GPA, passionate about transforming complex data challenges
                into elegant, scalable solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey spans from architecting ETL pipelines processing millions of IoT
                records to developing AI-powered chatbots with 92% accuracy. I thrive at the
                intersection of data engineering, machine learning, and real-world impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With hands-on experience in competitive environments—including securing 6th place
                worldwide in the SAUVC competition—I bring both technical excellence and strategic
                thinking to every project.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase text-black mb-3">
                  Education
                </h4>
                <p className="text-gray-700 font-medium">M.S. Data Analytics Engineering</p>
                <p className="text-sm text-gray-500">Northeastern University, Boston, MA</p>
                <p className="text-sm text-gray-500">GPA: 3.95 | Expected: May 2026</p>
                <p className="text-gray-700 font-medium mt-3">B.E. in ECE</p>
                <p className="text-sm text-gray-500">Anna University, Chennai, India</p>
                <p className="text-sm text-gray-500">GPA: 3.6 | Graduated: May 2024</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase text-black mb-3">
                  Location
                </h4>
                <p className="text-gray-700">Boston, Massachusetts</p>
                <p className="text-sm text-gray-500">Open to relocate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                <span className="text-5xl font-bold text-black">SS</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Sreevarshan Sathiyamurthy
              </h3>
              <p className="text-gray-600 mb-8">Data Analytics Engineer</p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:sathiyamurthy.sr@northeastern.edu"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 transition-all duration-300"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+18575409937"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 transition-all duration-300"
                  title="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
