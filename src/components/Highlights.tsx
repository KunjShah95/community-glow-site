import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Presentation, Users, Lightbulb, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Presentation,
    title: "Expert Workshops",
    description: "Hands-on sessions with industry leaders covering the latest in open source development.",
    stats: "25+ Workshops",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Inspiring Speakers",
    description: "Keynotes and talks from open source maintainers, tech leaders, and innovators.",
    stats: "50+ Speakers",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Showcase",
    description: "Discover groundbreaking projects and connect with the minds behind them.",
    stats: "100+ Projects",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Coffee,
    title: "Networking Events",
    description: "Connect with like-minded developers over coffee, meals, and social activities.",
    stats: "Daily Events",
    color: "from-orange-500 to-red-500"
  }
];

export const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Event <span className="bg-gradient-primary bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three days packed with inspiring content, meaningful connections, and hands-on learning experiences 
            designed to elevate your open source journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-card rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">{highlight.stats}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-hero rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Join the Community?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Don't miss out on this incredible opportunity to learn, connect, and contribute to the 
              future of open source technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Register for Free
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </motion.div>
      </div>
    </section>
  );
};