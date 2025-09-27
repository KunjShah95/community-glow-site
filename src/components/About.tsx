import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Open Source First",
    description: "Celebrating the power of collaborative development and community-driven innovation."
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "Bringing together passionate developers, maintainers, and contributors from around the world."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Showcasing projects that are changing the world through open source technology."
  },
  {
    icon: Zap,
    title: "Innovation Hub",
    description: "Where cutting-edge ideas meet practical solutions in the open source ecosystem."
  }
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="section-padding bg-gradient-card">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">OpenTech Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OpenTech Connect is more than just a conference—it's a celebration of the open source spirit 
            that drives innovation across the globe. Join us for three days of learning, sharing, and building together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-card rounded-3xl p-8 md:p-12 shadow-large"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in the transformative power of open source technology. Our mission is to create 
                a platform where innovators, creators, and dreamers can come together to share knowledge, 
                build connections, and shape the future of technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Foster collaboration between developers and communities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Showcase innovative open source projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Provide learning opportunities for all skill levels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Build a stronger, more inclusive tech community</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-primary rounded-2xl h-32"></div>
                  <div className="bg-gradient-secondary rounded-2xl h-24"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-accent rounded-2xl h-24"></div>
                  <div className="bg-gradient-primary rounded-2xl h-32"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};