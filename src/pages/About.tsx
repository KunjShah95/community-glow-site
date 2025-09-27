import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Running", value: "5", icon: Award },
    { label: "Global Attendees", value: "15K+", icon: Globe },
    { label: "Expert Speakers", value: "200+", icon: Users },
    { label: "Open Source Projects", value: "500+", icon: Target },
  ];

  const team = [
    { name: "Sarah Chen", role: "Event Director", bio: "Open source advocate with 10+ years in community building." },
    { name: "Marcus Johnson", role: "Technical Lead", bio: "Full-stack developer and maintainer of popular OSS projects." },
    { name: "Elena Rodriguez", role: "Community Manager", bio: "Passionate about connecting developers worldwide." },
    { name: "David Kim", role: "Partnerships Director", bio: "Building bridges between companies and open source communities." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About OpenTech Connect
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrating five years of bringing the global open source community together 
            for learning, collaboration, and innovation.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  OpenTech Connect began as a small meetup in 2019 with just 50 developers 
                  passionate about open source software. What started as casual conversations 
                  over coffee has grown into one of the most anticipated tech events of the year.
                </p>
                <p>
                  Our mission remains unchanged: to create a space where innovation thrives, 
                  knowledge is shared freely, and connections are made that last a lifetime. 
                  We believe that the best technology comes from collaboration, transparency, 
                  and community.
                </p>
                <p>
                  Today, we're proud to host thousands of developers, designers, entrepreneurs, 
                  and tech enthusiasts from around the world, all united by their passion for 
                  open source technology and community-driven innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="h-32 bg-gradient-primary rounded-2xl"></div>
                  <div className="h-48 bg-gradient-secondary rounded-2xl"></div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="h-48 bg-accent rounded-2xl"></div>
                  <div className="h-32 bg-gradient-primary rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals who make OpenTech Connect possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;