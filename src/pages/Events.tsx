import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

const Events = () => {
  const eventDays = [
    {
      date: "October 5, 2025 - Day 1",
      theme: "Foundation & Community",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          description: "Check-in, collect badges, and network with early arrivals over breakfast.",
          location: "Silver Oak University - Main Lobby",
          type: "networking" as const,
          duration: "1 hour",
          attendees: 500
        },
        {
          time: "09:00 - 10:00",
          title: "Opening Keynote: The Future of Open Source",
          description: "A visionary talk about where open source is heading in the next decade, delivered by industry pioneer Sarah Chen.",
          speaker: "Sarah Chen - GitHub",
          location: "Main Auditorium",
          type: "keynote" as const,
          duration: "1 hour",
          attendees: 1000
        },
        {
          time: "10:00 - 10:30",
          title: "Coffee Break & Networking",
          description: "Connect with fellow developers and speakers in our networking zone.",
          location: "Exhibition Hall",
          type: "break" as const,
          duration: "30 minutes"
        },
        {
          time: "10:30 - 11:30",
          title: "Building Inclusive Communities",
          description: "Learn strategies for creating welcoming, diverse open source communities that thrive.",
          speaker: "Marcus Johnson - Vercel",
          location: "Room A",
          type: "talk" as const,
          duration: "1 hour",
          attendees: 300
        },
        {
          time: "11:30 - 12:30",
          title: "Open Source Contribution Workshop",
          description: "Hands-on session for first-time contributors. Learn Git, GitHub workflows, and how to make your first PR.",
          speaker: "Elena Rodriguez - MongoDB",
          location: "Workshop Lab 1",
          type: "workshop" as const,
          duration: "1 hour",
          attendees: 150
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch & Community Showcase",
          description: "Enjoy lunch while exploring community projects and connecting with maintainers.",
          location: "University Cafeteria",
          type: "networking" as const,
          duration: "1.5 hours"
        },
        {
          time: "14:00 - 15:30",
          title: "Advanced Git Workflows Panel",
          description: "Expert panel discussing complex Git scenarios, team workflows, and best practices.",
          speaker: "Panel of Experts",
          location: "Main Auditorium",
          type: "panel" as const,
          duration: "1.5 hours",
          attendees: 800
        },
        {
          time: "15:30 - 16:00",
          title: "Afternoon Coffee Break",
          location: "Exhibition Hall",
          type: "break" as const,
          duration: "30 minutes"
        },
        {
          time: "16:00 - 17:30",
          title: "Project Lightning Talks",
          description: "5-minute presentations showcasing innovative open source projects from the community.",
          location: "Main Auditorium",
          type: "showcase" as const,
          duration: "1.5 hours",
          attendees: 600
        },
        {
          time: "17:30 - 19:00",
          title: "Welcome Reception",
          description: "Unwind with drinks, snacks, and casual conversations to end Day 1.",
          location: "University Garden",
          type: "networking" as const,
          duration: "1.5 hours"
        }
      ]
    }
  ];

  const eventStats = [
    { label: "Total Sessions", value: "10", icon: Calendar },
    { label: "Duration", value: "11 hrs", icon: Clock },
    { label: "Max Capacity", value: "1000", icon: Users },
    { label: "Venues", value: "6", icon: MapPin },
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
            Event Timeline
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Detailed schedule with precise timings, locations, and session information 
            for OpenTech Connect 2025 at Silver Oak University.
          </motion.p>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {eventStats.map((stat, index) => (
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

      {/* Timeline Section */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="space-y-16">
            {eventDays.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-display font-bold mb-4">{day.date}</h2>
                  <p className="text-xl text-muted-foreground">{day.theme}</p>
                </div>
                
                <Timeline events={day.events} date={day.date} />
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 bg-gradient-card rounded-3xl p-12 border border-border"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-display font-bold mb-4">Important Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">📱 Event App</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Download our mobile app for real-time updates, networking features, 
                  and interactive session materials.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">🎯 Session Changes</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Last-minute schedule changes will be announced via the app and 
                  displayed on screens throughout the venue.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">🍽️ Meals Included</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All meals, coffee breaks, and refreshments are included in your 
                  free registration. Dietary restrictions accommodated.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">🚗 Parking</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Free parking available at Silver Oak University. Shuttle service 
                  from nearby hotels will be provided.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">📹 Recording</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Selected sessions will be recorded and made available to all 
                  registered attendees within 48 hours.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">💬 Live Q&A</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Submit questions during sessions via the app. Speakers will 
                  address them during dedicated Q&A segments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;