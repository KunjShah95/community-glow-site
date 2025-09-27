import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin, User } from "lucide-react";

const Schedule = () => {
  const days = [
    {
      date: "October 5, 2025",
      day: "Day 1",
      theme: "Foundation & Community",
      sessions: [
        {
          time: "09:00 - 10:00",
          title: "Registration & Welcome Coffee",
          type: "networking",
          speaker: null,
          location: "Main Lobby"
        },
        {
          time: "10:00 - 11:00",
          title: "Opening Keynote: The Future of Open Source",
          type: "keynote",
          speaker: "Sarah Chen",
          location: "Main Auditorium"
        },
        {
          time: "11:30 - 12:30",
          title: "Building Inclusive Communities",
          type: "talk",
          speaker: "Marcus Johnson",
          location: "Room A"
        },
        {
          time: "14:00 - 17:00",
          title: "Git Mastery Workshop",
          type: "workshop",
          speaker: "Elena Rodriguez",
          location: "Workshop Hall"
        }
      ]
    },
    {
      date: "October 6, 2025",
      day: "Day 2",
      theme: "Innovation & Technology",
      sessions: [
        {
          time: "09:30 - 10:30",
          title: "AI in Open Source Development",
          type: "keynote",
          speaker: "David Kim",
          location: "Main Auditorium"
        },
        {
          time: "11:00 - 12:00",
          title: "Container Orchestration Deep Dive",
          type: "talk",
          speaker: "Lisa Park",
          location: "Room B"
        },
        {
          time: "14:00 - 17:00",
          title: "React Performance Optimization",
          type: "workshop",
          speaker: "Alex Chen",
          location: "Workshop Hall"
        },
        {
          time: "18:00 - 20:00",
          title: "Community Dinner & Networking",
          type: "networking",
          speaker: null,
          location: "Garden Terrace"
        }
      ]
    },
    {
      date: "October 7, 2025",
      day: "Day 3",
      theme: "Future & Collaboration",
      sessions: [
        {
          time: "10:00 - 11:00",
          title: "The Next Decade of Open Source",
          type: "keynote",
          speaker: "Jamie Wilson",
          location: "Main Auditorium"
        },
        {
          time: "11:30 - 12:30",
          title: "Contributing to Major Projects",
          type: "panel",
          speaker: "Panel Discussion",
          location: "Room A"
        },
        {
          time: "14:00 - 16:00",
          title: "Project Showcase & Demo",
          type: "showcase",
          speaker: "Community Projects",
          location: "Exhibition Hall"
        },
        {
          time: "16:30 - 17:00",
          title: "Closing Ceremony",
          type: "closing",
          speaker: "OpenTech Connect Team",
          location: "Main Auditorium"
        }
      ]
    }
  ];

  const getSessionColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'from-blue-500 to-cyan-500';
      case 'workshop': return 'from-green-500 to-emerald-500';
      case 'talk': return 'from-purple-500 to-pink-500';
      case 'panel': return 'from-orange-500 to-red-500';
      case 'networking': return 'from-gray-500 to-gray-600';
      case 'showcase': return 'from-yellow-500 to-orange-500';
      case 'closing': return 'from-indigo-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'keynote': return '🎤';
      case 'workshop': return '🛠️';
      case 'talk': return '💬';
      case 'panel': return '👥';
      case 'networking': return '🤝';
      case 'showcase': return '🚀';
      case 'closing': return '🎉';
      default: return '📅';
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
            Event Schedule
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            One day of inspiring talks, hands-on workshops, and meaningful connections at Silver Oak University.
          </motion.p>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {days.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              >
                {/* Day Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-gradient-primary px-8 py-3 rounded-full text-white font-semibold mb-4">
                    <Calendar className="w-5 h-5" />
                    {day.day}
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-2">{day.date}</h2>
                  <p className="text-xl text-muted-foreground">{day.theme}</p>
                </div>

                {/* Sessions */}
                <div className="space-y-6">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (dayIndex * 0.2) + (sessionIndex * 0.1) }}
                      className="bg-white dark:bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Time & Type */}
                        <div className="lg:w-64 flex-shrink-0">
                          <div className="flex items-center gap-3 mb-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-lg">{session.time}</span>
                          </div>
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getSessionColor(session.type)} px-4 py-2 rounded-full text-white text-sm font-medium`}>
                            <span>{getSessionIcon(session.type)}</span>
                            {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">{session.title}</h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            {session.speaker && (
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{session.speaker}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{session.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-20 text-center bg-gradient-hero rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              Don't Miss Out!
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Register now to secure your spot at OpenTech Connect 2025 at Silver Oak University 
              and be part of this incredible journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Register for Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;