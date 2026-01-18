'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

interface ResearchItemProps {
  title: string
  description: string
  tags: string[]
  index: number
}

const ResearchItem = ({ title, description, tags, index }: ResearchItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-gray-700" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-black mb-2 leading-snug">{title}</h3>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Research = () => {
  const researchPapers = [
    {
      title: 'Fake Product Detection Using Blockchain and QR Code',
      description:
        'Proposed a blockchain-based system to detect counterfeit products by securely linking product serial numbers with QR codes for end-to-end traceability. Designed a decentralized architecture ensuring tamper-proof records and improved transparency in supply chain authentication.',
      tags: ['Blockchain', 'Supply Chain', 'Security', 'QR Technology'],
    },
    {
      title: 'Secure Auditing with Encrypted Trace Logs in Multi-Cloud Storage',
      description:
        'Developed a secure auditing framework using encrypted trace logs to monitor user activities across multiple cloud platforms. Enhanced data integrity and access control through user-specific encryption keys and centralized multi-cloud monitoring.',
      tags: ['Cloud Security', 'Encryption', 'Data Integrity', 'Multi-Cloud'],
    },
    {
      title: 'Blockchain and Deep Learning Models for Crypto Price Forecasting',
      description:
        'Implemented hybrid blockchain and deep learning models to forecast cryptocurrency price movements in volatile markets. Evaluated neural network-based time-series models to improve prediction reliability and reduce investor risk.',
      tags: ['Blockchain', 'Deep Learning', 'Time-Series', 'Forecasting'],
    },
    {
      title: 'Application of BiMPM Technique to Detect Fake News',
      description:
        'Applied the BiMPM deep learning architecture to identify fake news by analyzing contextual and semantic relationships in text. Improved detection accuracy by integrating article summarization and entity correlation techniques.',
      tags: ['NLP', 'Deep Learning', 'Fake News Detection', 'BiMPM'],
    },
    {
      title: 'Integrating Active Contours and Decision Trees for Hemorrhage Detection',
      description:
        'Designed a medical imaging system to detect and classify hemorrhages in CT scans using image segmentation techniques. Achieved high classification accuracy by combining active contour models with decision tree-based feature classification.',
      tags: ['Medical Imaging', 'Computer Vision', 'Decision Trees', 'Healthcare'],
    },
    {
      title: 'Text Segmentation and Transliteration Using Deep Learning',
      description:
        'Developed a deep learning pipeline for segmenting text from natural images and improving OCR performance. Enabled multilingual transliteration to enhance accessibility for multimedia indexing and assistive technologies.',
      tags: ['Deep Learning', 'OCR', 'NLP', 'Accessibility'],
    },
    {
      title: 'Cloud-Assisted IoT-Enabled Forest Fire Detection System',
      description:
        'Built an IoT-based early forest fire detection system using real-time sensor data and cloud-assisted analytics. Integrated environmental monitoring sensors with cloud infrastructure for rapid alerting and disaster prevention.',
      tags: ['IoT', 'Cloud Computing', 'Real-Time Analytics', 'Environmental'],
    },
  ]

  return (
    <section id="research" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 md:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4">
            Research
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-black">
            Published Work
          </h2>
          <p className="text-gray-600 mt-4 text-lg">IEEE-Published Researcher with Multiple Papers</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchPapers.map((paper, index) => (
            <ResearchItem key={index} {...paper} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research
