import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      company: "GitHub",
      bio: "Open source advocate with 10+ years building developer communities and tools.",
      topics: ["Community Building", "Developer Experience"],
      image: "👩‍💻",
      social: {
        twitter: "https://twitter.com/sarahchen",
        github: "https://github.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarahchen"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Principal Engineer",
      company: "Vercel",
      bio: "Full-stack developer and maintainer of popular React ecosystem projects.",
      topics: ["React", "Performance", "Web Development"],
      image: "👨‍💻",
      social: {
        twitter: "https://twitter.com/marcusj",
        github: "https://github.com/marcusj"
      }
    },
    {
      name: "Elena Rodriguez",
      role: "Developer Relations Lead",
      company: "MongoDB",
      bio: "Passionate about connecting developers and building inclusive tech communities.",
      topics: ["Database Design", "Developer Relations"],
      image: "👩‍🔬",
      social: {
        twitter: "https://twitter.com/elenadev",
        linkedin: "https://linkedin.com/in/elenadev"
      }
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "Docker",
      bio: "Container technology expert and cloud native computing advocate.",
      topics: ["Containers", "Cloud Native", "DevOps"],
      image: "👨‍🚀",
      social: {
        github: "https://github.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim"
      }
    },
    {
      name: "Lisa Park",
      role: "Staff Engineer",
      company: "Stripe",
      bio: "Infrastructure specialist focused on scalable systems and developer tools.",
      topics: ["Infrastructure", "Scalability", "API Design"],
      image: "👩‍🏭",
      social: {
        twitter: "https://twitter.com/lisapark",
        github: "https://github.com/lisapark"
      }
    },
    {
      name: "Alex Chen",
      role: "Frontend Architect",
      company: "Netlify",
      bio: "JavaScript expert and contributor to multiple open source UI libraries.",
      topics: ["Frontend", "JavaScript", "UI/UX"],
      image: "👨‍🎨",
      social: {
        twitter: "https://twitter.com/alexchen",
        github: "https://github.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen"
      }
    }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return Twitter;
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      default: return ExternalLink;
    }
  };

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
            Meet Our Speakers
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from industry leaders, open source maintainers, and innovation pioneers 
            who are shaping the future of technology.
          </motion.p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-card rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                    {speaker.image}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-primary font-semibold">{speaker.role}</p>
                  <p className="text-muted-foreground">{speaker.company}</p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {speaker.bio}
                </p>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {Object.entries(speaker.social).map(([platform, url]) => {
                    const Icon = getSocialIcon(platform);
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Become a Speaker CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center bg-gradient-card rounded-3xl p-12 border border-border"
          >
            <h3 className="text-3xl font-display font-bold mb-6">Want to Speak at OpenTech Connect?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate speakers to share their knowledge and experience 
              with our community. Submit your talk proposal today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Submit Talk Proposal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Speaker Guidelines
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;