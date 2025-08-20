'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';

export function ContactCTA() {
  return (
    <Section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your challenges and explore how strategic consulting 
              can help your organization achieve its full potential.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FiMail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Email me directly</div>
                  <div className="text-gray-300">sameer@automatethis.ca</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FiPhone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Schedule a call</div>
                  <div className="text-gray-300">+1-905-7829601</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50/50 via-white/90 to-blue-50/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get Started Today
            </h3>
            <p className="text-gray-600 mb-8">
              Whether you're looking to optimize operations, drive digital transformation, 
              or develop strategic initiatives, I'm here to help.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="w-full" asChild>
                <Link href="/contact">
                  Start Your Project <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="/services">Learn About Services</Link>
              </Button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Free initial consultation • No obligation • Quick response
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
