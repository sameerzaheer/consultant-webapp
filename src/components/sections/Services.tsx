'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { 
  FiTarget, 
  FiSettings, 
  FiSmartphone, 
  FiBarChart, 
  FiUsers, 
  FiTrendingUp,
  FiArrowRight 
} from 'react-icons/fi';

const services = [
  {
    icon: FiTarget,
    title: 'Strategy Consulting',
    description: 'Develop comprehensive business strategies that align with your organization\'s goals and market opportunities.',
    features: ['Market Analysis', 'Competitive Intelligence', 'Strategic Planning', 'Growth Strategy']
  },
  {
    icon: FiSettings,
    title: 'Operations Management',
    description: 'Optimize your operational processes to improve efficiency, reduce costs, and enhance productivity.',
    features: ['Process Optimization', 'Supply Chain Management', 'Quality Improvement', 'Cost Reduction']
  },
  {
    icon: FiSmartphone,
    title: 'Digital Transformation',
    description: 'Guide your organization through digital transformation initiatives to stay competitive in the modern market.',
    features: ['Technology Assessment', 'Digital Strategy', 'Change Management', 'Implementation Support']
  },
  {
    icon: FiBarChart,
    title: 'Project Management',
    description: 'Ensure successful project delivery through proven methodologies and effective stakeholder management.',
    features: ['Project Planning', 'Risk Management', 'Stakeholder Engagement', 'Delivery Excellence']
  },
  {
    icon: FiUsers,
    title: 'Organizational Development',
    description: 'Build stronger, more effective organizations through culture development and talent optimization.',
    features: ['Culture Assessment', 'Leadership Development', 'Team Building', 'Performance Management']
  },
  {
    icon: FiTrendingUp,
    title: 'Performance Improvement',
    description: 'Drive measurable improvements in business performance through data-driven insights and proven methodologies.',
    features: ['KPI Development', 'Performance Analytics', 'Continuous Improvement', 'ROI Optimization']
  }
];

export function Services() {
  return (
    <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-200 rounded-full blur-3xl"></div>
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
            Comprehensive <span className="text-blue-600">Consulting Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            I offer a full range of strategic consulting services designed to help your organization 
            achieve its goals and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-8">
            Ready to transform your business? Let's discuss how I can help you achieve your goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
