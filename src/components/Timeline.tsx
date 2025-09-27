import { motion } from "framer-motion";
import { Clock, MapPin, User, Users } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  location: string;
  type: "keynote" | "workshop" | "talk" | "panel" | "networking" | "showcase" | "break";
  duration?: string;
  attendees?: number;
}

interface TimelineProps {
  events: TimelineEvent[];
  date: string;
}

export const Timeline = ({ events, date }: TimelineProps) => {
  const getEventColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-blue-500';
      case 'workshop': return 'bg-green-500';
      case 'talk': return 'bg-purple-500';
      case 'panel': return 'bg-orange-500';
      case 'networking': return 'bg-pink-500';
      case 'showcase': return 'bg-yellow-500';
      case 'break': return 'bg-gray-400';
      default: return 'bg-gray-500';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'keynote': return '🎤';
      case 'workshop': return '🛠️';
      case 'talk': return '💬';
      case 'panel': return '👥';
      case 'networking': return '🤝';
      case 'showcase': return '🚀';
      case 'break': return '☕';
      default: return '📅';
    }
  };

  return (
    <div className="bg-white dark:bg-card rounded-3xl p-8 shadow-soft">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <h3 className="text-2xl font-display font-bold">{date}</h3>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow"></div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6"
            >
              {/* Timeline dot */}
              <div className={`w-12 h-12 ${getEventColor(event.type)} rounded-full flex items-center justify-center text-white font-bold z-10 flex-shrink-0`}>
                <span className="text-lg">{getEventIcon(event.type)}</span>
              </div>

              {/* Event content */}
              <div className="flex-1 pb-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{event.time}</span>
                      {event.duration && (
                        <span className="text-sm text-muted-foreground">({event.duration})</span>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                    
                    {event.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {event.speaker && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{event.speaker}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      {event.attendees && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}+ attendees</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`px-4 py-2 rounded-full text-xs font-medium text-white ${getEventColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};