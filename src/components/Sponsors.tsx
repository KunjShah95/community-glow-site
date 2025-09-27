import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = {
  platinum: [
    { name: "GitHub", logo: "🐙" },
    { name: "Vercel", logo: "▲" },
  ],
  gold: [
    { name: "Docker", logo: "🐳" },
    { name: "MongoDB", logo: "🍃" },
    { name: "Stripe", logo: "💳" },
  ],
  silver: [
    { name: "Digital Ocean", logo: "🌊" },
    { name: "Auth0", logo: "🔐" },
    { name: "Netlify", logo: "⚡" },
    { name: "Supabase", logo: "⚡" },
  ]
};

export const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Amazing <span className="bg-gradient-primary bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thank you to our incredible sponsors who make OpenTech Connect possible and help us keep it free for everyone.
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-muted-foreground">Platinum Sponsors</h3>
          <div className="flex justify-center items-center gap-12">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-card rounded-3xl p-12 shadow-large hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
                <div className="text-6xl mb-4 text-center">{sponsor.logo}</div>
                <h4 className="text-2xl font-bold text-center">{sponsor.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-muted-foreground">Gold Sponsors</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-3 text-center">{sponsor.logo}</div>
                <h4 className="text-lg font-semibold text-center">{sponsor.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-bold text-center mb-8 text-muted-foreground">Silver Sponsors</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl mb-2 text-center">{sponsor.logo}</div>
                <h4 className="text-sm font-medium text-center">{sponsor.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-card rounded-3xl border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our amazing sponsors and help support the open source community while showcasing your brand to thousands of developers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Become a Sponsor
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};