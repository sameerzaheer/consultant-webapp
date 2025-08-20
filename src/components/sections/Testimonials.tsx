'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Client Testimonial',
    role: 'Fortune 500 Company',
    image: '/placeholder-avatar-1.jpg',
    content: 'Professional consulting services with measurable results. Strategic insights and implementation support helped streamline our operations significantly.',
    rating: 5
  },
  {
    name: 'Project Stakeholder',
    role: 'Technology Sector',
    image: '/placeholder-avatar-2.jpg',
    content: 'Excellent project management and change management expertise. The transformation process was well-structured and delivered on time.',
    rating: 5
  },
  {
    name: 'Business Leader',
    role: 'Mid-Market Company',
    image: '/placeholder-avatar-3.jpg',
    content: 'Strategic planning and market analysis provided valuable insights for our growth initiatives. Professional approach and thorough methodology.',
    rating: 5
  },
  {
    name: 'Operations Manager',
    role: 'Manufacturing Industry',
    image: '/placeholder-avatar-4.jpg',
    content: 'Process optimization and efficiency improvements delivered tangible results. Strong analytical skills and practical implementation strategies.',
    rating: 5
  }
];

export function Testimonials() {
  return (
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
            What <span className="text-blue-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what leaders from various industries 
            say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-200 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
