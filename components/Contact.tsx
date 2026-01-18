'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!')
      setIsSubmitting(false)
      ;(e.target as HTMLFormElement).reset()
    }, 1000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sathiyamurthy.sr@northeastern.edu',
      href: 'mailto:sathiyamurthy.sr@northeastern.edu',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (857) 540-9937',
      href: 'tel:+18575409937',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Boston, MA (Open to Relocate)',
    },
  ]

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4">
            Get in Touch
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold">
            Let's Work
            <br />
            Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just
              chatting about data science and analytics.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-400 hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full text-black flex-shrink-0">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-black mb-1">
                      {method.title}
                    </h4>
                    <p className="text-gray-600 text-[15px]">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl p-12"
          >
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl focus:border-black focus:outline-none resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
