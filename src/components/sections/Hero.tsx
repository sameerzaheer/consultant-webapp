import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const roles = ['document extraction', 'geospatial ML', 'computer vision', 'RAG & agent systems', 'edge ML deployment'];

const credentials = ['12+ years', 'Ex-Palantir FDE', 'Ex-SoundHound', '4 patents'];

function useTypewriter(words: string[], enabled: boolean) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    if (!reverse && subIndex === words[index].length) {
      const pause = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(pause);
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 30 : 55
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, enabled, words]);

  if (!enabled) return words[0];
  return words[index].slice(0, subIndex);
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const roleText = useTypewriter(roles, !shouldReduceMotion);

  return (
    <section id="hero" className="flex min-h-[90vh] flex-col justify-center px-6 py-24 sm:px-10">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="font-mono text-sm text-accent">AI/ML Engineering Consultant</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-fg sm:text-5xl">
          Outcome-focused AI consulting
        </h1>
        <p className="mt-5 text-lg text-fg-muted sm:text-xl">
          We build AI/ML powered systems that solve real-world problems.
        </p>

        <p className="mt-6 font-mono text-sm text-fg-muted" aria-live="polite">
          <span className="text-fg-subtle">Currently shipping:</span>{' '}
          <span className="text-fg">{roleText}</span>
          <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent motion-safe:animate-pulse" aria-hidden="true" />
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {credentials.map((c) => (
            <span key={c} className="rounded border border-border px-2.5 py-1 font-mono text-xs text-fg-subtle">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Start a project</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#case-studies">View case studies</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
