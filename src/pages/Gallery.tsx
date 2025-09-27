import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Play, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  const years = [
    {
      year: "2023",
      theme: "Building the Future Together",
      highlight: "First hybrid event with 2,500+ attendees",
      images: [
        { type: "image", title: "Opening Keynote", description: "Packed main auditorium" },
        { type: "image", title: "Workshop Sessions", description: "Hands-on learning" },
        { type: "video", title: "Community Highlights", description: "Best moments from day 2" },
        { type: "image", title: "Networking Event", description: "Evening social mixer" },
        { type: "image", title: "Project Demos", description: "Innovative showcases" },
        { type: "image", title: "Team Photos", description: "Community memories" },
      ]
    },
    {
      year: "2022",
      theme: "Open Source Renaissance",
      highlight: "Record-breaking attendance with 3,000+ participants",
      images: [
        { type: "image", title: "Main Stage", description: "Expert panel discussion" },
        { type: "video", title: "Day 1 Recap", description: "Highlights and interviews" },
        { type: "image", title: "Sponsor Expo", description: "Technology showcase" },
        { type: "image", title: "Coding Workshop", description: "Collaborative learning" },
        { type: "image", title: "Awards Ceremony", description: "Recognizing contributors" },
        { type: "image", title: "Group Photo", description: "All attendees together" },
      ]
    },
    {
      year: "2021",
      theme: "Connected Across Distances",
      highlight: "Fully virtual event reaching global audience",
      images: [
        { type: "image", title: "Virtual Stage", description: "Digital keynote setup" },
        { type: "image", title: "Online Workshops", description: "Interactive sessions" },
        { type: "video", title: "Global Connections", description: "Worldwide participation" },
        { type: "image", title: "Digital Networking", description: "Virtual meetups" },
        { type: "image", title: "Home Setups", description: "Attendees from home" },
        { type: "image", title: "Virtual Awards", description: "Online recognition" },
      ]
    }
  ];

  const generatePlaceholderColor = (index: number) => {
    const colors = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600',
      'from-pink-400 to-pink-600',
      'from-yellow-400 to-orange-500',
      'from-cyan-400 to-blue-500',
    ];
    return colors[index % colors.length];
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
            Event Gallery
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Relive the magic of previous OpenTech Connect events through photos, 
            videos, and memorable moments from our community.
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-20">
            {years.map((yearData, yearIndex) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: yearIndex * 0.2 }}
              >
                {/* Year Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-gradient-primary px-8 py-3 rounded-full text-white font-semibold mb-4">
                    <Calendar className="w-5 h-5" />
                    OpenTech Connect {yearData.year}
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-2">{yearData.theme}</h2>
                  <p className="text-xl text-muted-foreground">{yearData.highlight}</p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {yearData.images.map((media, mediaIndex) => (
                    <motion.div
                      key={mediaIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: (yearIndex * 0.2) + (mediaIndex * 0.1) }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 group-hover:-translate-y-2">
                        {/* Media Placeholder */}
                        <div className={`aspect-video bg-gradient-to-br ${generatePlaceholderColor(mediaIndex)} relative flex items-center justify-center`}>
                          {media.type === 'video' ? (
                            <div className="text-white">
                              <Play className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          ) : (
                            <div className="text-white">
                              <ImageIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          )}
                          
                          {/* Media Type Badge */}
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                            {media.type === 'video' ? '📹 Video' : '📸 Photo'}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                            {media.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{media.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upload CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-20 text-center bg-gradient-card rounded-3xl p-12 border border-border"
          >
            <h3 className="text-3xl font-display font-bold mb-6">Share Your Memories</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Did you attend one of our events? We'd love to see your photos and videos! 
              Share your memories with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Upload Photos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                View All Galleries
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;