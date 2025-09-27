import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@opentechconnect.dev",
      secondary: "For general inquiries and support",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "Available Mon-Fri, 9AM-5PM PST",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "San Francisco, CA",
      secondary: "Event venue and office location",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Mon-Fri: 9AM-5PM PST",
      secondary: "Weekend support available",
      color: "from-orange-500 to-red-500"
    }
  ];

  const teamContacts = [
    {
      name: "Sarah Chen",
      role: "Event Director",
      email: "sarah@opentechconnect.dev",
      focus: "Event planning, partnerships"
    },
    {
      name: "Marcus Johnson",
      role: "Technical Lead",
      email: "marcus@opentechconnect.dev", 
      focus: "Speaker coordination, technical content"
    },
    {
      name: "Elena Rodriguez",
      role: "Community Manager",
      email: "elena@opentechconnect.dev",
      focus: "Community outreach, social media"
    }
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
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about OpenTech Connect? Need help with registration or sponsorship? 
            We're here to help you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{info.primary}</p>
                <p className="text-muted-foreground text-sm">{info.secondary}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-card rounded-3xl p-8 shadow-large"
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-display font-bold">Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
                    <option>General Inquiry</option>
                    <option>Speaker Application</option>
                    <option>Sponsorship</option>
                    <option>Volunteer</option>
                    <option>Media/Press</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button className="btn-hero w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Team Contacts & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Team Contacts */}
              <div className="bg-white dark:bg-card rounded-3xl p-8 shadow-large">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-display font-bold">Meet Our Team</h3>
                </div>
                
                <div className="space-y-6">
                  {teamContacts.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="border-b border-border pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{member.name}</h4>
                          <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                          <p className="text-muted-foreground text-sm mb-2">{member.focus}</p>
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-gradient-card rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-display font-bold mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🎫 Registration</h4>
                    <p className="text-muted-foreground text-sm">
                      OpenTech Connect is completely free! Register on our homepage.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">📱 Mobile App</h4>
                    <p className="text-muted-foreground text-sm">
                      Download our event app for schedules, networking, and live updates.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🏨 Accommodation</h4>
                    <p className="text-muted-foreground text-sm">
                      We have partner hotels with special rates. Check your registration email.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🎙️ Speaking</h4>
                    <p className="text-muted-foreground text-sm">
                      Speaker applications for 2025 are now open! Apply before August 2025.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;