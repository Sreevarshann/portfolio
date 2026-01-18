'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  number: string
  badge?: string
  title: string
  description: string
  highlights: string[]
  tags: string[]
  date: string
  link?: string
  index: number
}

const ProjectCard = ({
  number,
  badge,
  title,
  description,
  highlights,
  tags,
  date,
  link,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-2xl p-10 hover:border-gray-400 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="text-7xl font-bold text-gray-200 mb-4">{number}</div>
      
      {badge && (
        <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm font-semibold text-black mb-6">
          {badge}
        </div>
      )}
      
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight flex-1">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            title="View Project"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {highlights.map((highlight, i) => (
          <li key={i} className="text-gray-700 text-[15px] pl-6 relative leading-relaxed">
            <span className="absolute left-0 text-black font-semibold">✓</span>
            {highlight}
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2.5 mb-8">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-xs font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="pt-6 border-t border-gray-200">
        <span className="text-sm text-gray-500 font-medium">{date}</span>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      number: '01',
      badge: '🏆 3rd Place - Google MLOps Expo',
      title: 'Charlie - MBTA Real-Time Chatbot',
      description:
        'Built a real-time MBTA chatbot using Python, LangChain, and OpenAI APIs achieving 92% response accuracy with RAG pipeline and vector embeddings.',
      highlights: [
        'Designed RAG pipeline ensuring 98% factual, hallucination-free responses',
        'Integrated real-time delay prediction cutting latency by 40% with sub-second responses',
        'Deployed scalable Dockerized chatbot supporting peak-hour concurrent users',
      ],
      tags: ['Python', 'LangChain', 'OpenAI', 'RAG', 'Docker', 'Vector Embeddings'],
      date: 'Dec 2025',
      link: '#',
    },
    {
      number: '02',
      title: 'AI-Driven Medical Query Assistant',
      description:
        'Built an end-to-end LLM-driven clinical assistant using OpenAI GPT, LangChain, and Pinecone vector search, enabling context-aware clinical responses.',
      highlights: [
        'Engineered RAG pipeline and deployed Docker-containerized Flask API on AWS EC2',
        'Improved response accuracy by 40% with query classification and retrieval logic',
        'Developed Streamlit analytics suite with 7 monitoring panels for query trends and metrics',
      ],
      tags: ['LLM', 'RAG', 'Flask', 'AWS EC2', 'Docker', 'Pinecone', 'Streamlit'],
      date: 'Nov 2025',
    },
    {
      number: '03',
      title: 'Automated Sales & Customer Analytics Data Warehouse',
      description:
        'Constructed Medallion-style data warehouse using PostgreSQL and MS SQL Server, building sales, customer, and product models to enhance reporting accuracy.',
      highlights: [
        'Streamlined Python ETL pipelines with Airflow, reducing manual processing time by 70%',
        'Enforced data-quality checks using Great Expectations for reliable analytics',
        'Designed 2 interactive Tableau dashboards for revenue trends and customer churn analysis',
      ],
      tags: ['PostgreSQL', 'MS SQL', 'dbt', 'Airflow', 'Tableau', 'Great Expectations', 'AWS S3'],
      date: 'Aug 2025',
    },
    {
      number: '04',
      title: 'Financial Risk Analytics & Portfolio Stress-Testing System',
      description:
        'Unified loan, credit-bureau, and transaction records into centralized Snowflake warehouse and modeled risk tables using DBT.',
      highlights: [
        'Developed scenario-based risk analysis engine in Python/SQL for stress-test insights',
        'Generated portfolio-level loss projections under changing market conditions',
        'Created 3 Power BI dashboards visualizing portfolio health and probability-of-default trends',
      ],
      tags: ['Snowflake', 'DBT', 'Python', 'SQL', 'Power BI', 'Risk Analytics'],
      date: 'Feb 2025',
    },
    {
      number: '05',
      badge: 'IEEE Published',
      title: 'Text Segmentation & Transliteration Using Deep Learning',
      description:
        'Developed deep learning pipeline to segment text from natural images and scanned documents, enabling accurate OCR on complex visual backgrounds.',
      highlights: [
        'Applied image preprocessing and text segmentation for noisy, real-world visuals',
        'Enabled structured extraction and indexing of image-derived text',
        'Designed workflows supporting multimedia indexing and assistive technologies',
      ],
      tags: ['Deep Learning', 'OCR', 'Image Processing', 'TensorFlow', 'Python'],
      date: 'Jan 2024',
    },
  ]

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4">
            Projects
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
