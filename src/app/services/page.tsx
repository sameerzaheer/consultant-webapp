'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { 
  FiTarget, 
  FiSettings, 
  FiSmartphone, 
  FiBarChart, 
  FiUsers, 
  FiTrendingUp,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

const services = [
  {
    id: 'strategy',
    icon: FiTarget,
    title: 'Strategy Consulting',
    description: 'Comprehensive strategic planning and business development services to drive sustainable growth.',
    features: [
      'Market Analysis & Competitive Intelligence',
      'Strategic Planning & Roadmap Development',
      'Growth Strategy & Market Entry',
      'Business Model Innovation',
      'Merger & Acquisition Support',
      'Strategic Partnership Development'
    ],
    deliverables: [
      'Strategic Assessment Report',
      '3-5 Year Strategic Roadmap',
      'Market Entry Strategy',
      'Implementation Timeline'
    ]
  },
  {
    id: 'operations',
    icon: FiSettings,
    title: 'Operations Management',
    description: 'Optimize operational processes to improve efficiency, reduce costs, and enhance productivity.',
    features: [
      'Process Optimization & Reengineering',
      'Supply Chain Management',
      'Quality Management Systems',
      'Cost Reduction Programs',
      'Lean Six Sigma Implementation',
      'Performance Management Systems'
    ],
    deliverables: [
      'Current State Analysis',
      'Process Improvement Recommendations',
      'Implementation Roadmap',
      'Training Materials'
    ]
  },
  {
    id: 'digital',
    icon: FiSmartphone,
    title: 'Digital Transformation',
    description: 'Guide organizations through digital transformation to stay competitive in the modern market.',
    features: [
      'Digital Strategy Development',
      'Technology Assessment & Selection',
      'Change Management',
      'Digital Skills Development',
      'Data Analytics Implementation',
      'Automation & AI Integration'
    ],
    deliverables: [
      'Digital Maturity Assessment',
      'Technology Roadmap',
      'Change Management Plan',
      'Training & Support Materials'
    ]
  },
  {
    id: 'project',
    icon: FiBarChart,
    title: 'Project Management',
    description: 'Ensure successful project delivery through proven methodologies and stakeholder management.',
    features: [
      'Project Planning & Scoping',
      'Risk Management & Mitigation',
      'Stakeholder Engagement',
      'Resource Planning & Allocation',
      'Quality Assurance',
      'Performance Monitoring'
    ],
    deliverables: [
      'Project Charter & Plan',
      'Risk Management Framework',
      'Communication Plan',
      'Status Reports & Dashboards'
    ]
  },
  {
    id: 'organization',
    icon: FiUsers,
    title: 'Organizational Development',
    description: 'Build stronger, more effective organizations through culture development and talent optimization.',
    features: [
      'Organizational Design & Structure',
      'Culture Assessment & Development',
      'Leadership Development Programs',
      'Team Building & Collaboration',
      'Talent Management Strategy',
      'Performance Management Systems'
    ],
    deliverables: [
      'Organizational Assessment',
      'Culture Development Plan',
      'Leadership Development Program',
      'Performance Management Framework'
    ]
  },
  {
    id: 'performance',
    icon: FiTrendingUp,
    title: 'Performance Improvement',
    description: 'Drive measurable improvements through data-driven insights and proven methodologies.',
    features: [
      'KPI Development & Measurement',
      'Performance Analytics & Reporting',
      'Continuous Improvement Programs',
      'ROI Optimization',
      'Benchmarking & Best Practices',
      'Scorecard Development'
    ],
    deliverables: [
      'Performance Baseline Analysis',
      'KPI Dashboard',
      'Improvement Action Plans',
      'ROI Reports'
    ]
  }
];

const methodology = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'Comprehensive analysis of your current state, challenges, and opportunities.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Co-create tailored solutions and strategies aligned with your objectives.'
  },
  {
    step: '03',
    title: 'Implementation Planning',
    description: 'Develop detailed roadmaps with clear timelines and success metrics.'
  },
  {
    step: '04',
    title: 'Execution Support',
    description: 'Guide implementation with ongoing support and course corrections.'
  },
  {
    step: '05',
    title: 'Measurement & Optimization',
    description: 'Monitor progress and optimize for sustained results and continuous improvement.'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-blue-400">Consulting Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              I offer a full spectrum of strategic consulting services designed to help your 
              organization navigate challenges, optimize operations, and achieve sustainable growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                id={service.id}
              >
                <Card className="h-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start text-sm text-gray-700">
                              <FiCheck className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven <span className="text-blue-400">Methodology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My structured approach ensures consistent results and measurable outcomes 
              across all engagements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {methodology.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg border-2 border-blue-400/30">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your specific needs and develop a customized solution 
              that drives results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Consultation <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
