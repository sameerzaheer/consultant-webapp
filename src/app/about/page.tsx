'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { 
  FiAward, 
  FiUsers, 
  FiTrendingUp, 
  FiBriefcase,
  FiArrowRight 
} from 'react-icons/fi';

const stats = [
  { icon: FiTrendingUp, label: 'Years of Experience', value: '15+' },
  { icon: FiUsers, label: 'Clients Served', value: '50+' },
  { icon: FiBriefcase, label: 'Projects Completed', value: '100+' },
  { icon: FiAward, label: 'Success Rate', value: '95%' },
];

const experience = [
  {
    company: 'Forward Deployed Engineer',
    title: 'Palantir Technologies',
    period: '2023 - 2025',
    description: 'Implemented workflows for customers in petroleum, renewable energy, manufacturing, construction and supplychain industries, focusing on operational excellence and digital transformation initiatives.'
  },
  {
    company: 'SoundHound AI',
    title: 'Software Engineer',
    period: '2018 - 2022',
    description: 'Implemented end to end machine learning operations for wakeup phrase detection.'
  },
  {
    company: 'Claron Technology',
    title: 'Algorithms Engineer',
    period: '2013 - 2018',
    description: 'Developed computer vision solutions to solve challenging problems in medical imaging.'
  },
];

const skills = [
  'Strategic Planning',
  'Operations Management',
  'Digital Transformation',
  'Project Management',
  'Change Management',
  'Business Process Optimization',
  'Data Analysis',
  'Stakeholder Management',
  'Leadership Development',
  'Performance Improvement'
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About <span className="text-blue-400">Sameer Zaheer</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A technology consultant with over 15 years of experience helping organizations 
                navigate complex challenges, optimize operations, and achieve sustainable growth 
                through innovative solutions and proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Let's Work Together <FiArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <stat.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven track record of delivering exceptional results across leading consulting firms 
              and diverse industry sectors.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-gray-500 mt-2 md:mt-0">
                        {job.period}
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Competencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized skills and expertise developed through years of strategic consulting 
              and transformation leadership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white to-blue-50 border border-blue-200 rounded-full px-6 py-3 text-gray-700 hover:shadow-lg hover:border-blue-300 transition-all duration-200 hover:-translate-y-1"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Drive Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how my experience and expertise can help your organization 
              achieve its strategic objectives.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a Conversation <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
