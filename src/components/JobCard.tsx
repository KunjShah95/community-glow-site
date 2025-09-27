import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Building, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract" | "Remote";
    salary?: string;
    description: string;
    requirements: string[];
    technologies: string[];
    postedDate: string;
    applicationUrl: string;
    companyLogo?: string;
  };
  index: number;
}

export const JobCard = ({ job, index }: JobCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Part-time": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Contract": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "Remote": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border group hover:-translate-y-1"
    >
      <div className="flex items-start gap-4 mb-4">
        {job.companyLogo ? (
          <img src={job.companyLogo} alt={job.company} className="w-12 h-12 rounded-lg" />
        ) : (
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-muted-foreground font-medium">{job.company}</p>
          
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{job.postedDate}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
            )}
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
          {job.type}
        </div>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
        {job.description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {job.technologies.slice(0, 6).map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {job.technologies.length > 6 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
              +{job.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Requirements preview */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm mb-2">Key Requirements:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {job.requirements.slice(0, 3).map((req, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>{req}</span>
            </li>
          ))}
          {job.requirements.length > 3 && (
            <li className="text-xs text-muted-foreground/70">
              +{job.requirements.length - 3} more requirements
            </li>
          )}
        </ul>
      </div>

      <div className="flex gap-3">
        <Button className="flex-1 btn-hero" asChild>
          <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
            Apply Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
        <Button variant="outline" size="sm">
          Save
        </Button>
      </div>
    </motion.div>
  );
};