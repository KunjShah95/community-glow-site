import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { Search, Filter, Briefcase, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"];
  const locations = ["All", "Remote", "San Francisco", "New York", "London", "Berlin", "Toronto"];

  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "GitHub",
      location: "Remote",
      type: "Full-time" as const,
      salary: "$120k - $160k",
      description: "Join our team building the future of collaborative development. Work on React-based applications used by millions of developers worldwide. Focus on performance, accessibility, and user experience.",
      requirements: [
        "5+ years of React experience",
        "TypeScript proficiency",
        "Experience with modern build tools",
        "Strong CSS/HTML skills",
        "Open source contributions preferred"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Docker", "Kubernetes"],
      postedDate: "2 days ago",
      applicationUrl: "https://github.com/careers"
    },
    {
      id: "2", 
      title: "DevOps Engineer",
      company: "Vercel",
      location: "San Francisco",
      type: "Full-time" as const,
      salary: "$140k - $180k",
      description: "Help scale our edge infrastructure that serves millions of websites. Work with cutting-edge technologies and contribute to open source projects that power the modern web.",
      requirements: [
        "Kubernetes and Docker expertise",
        "AWS/GCP cloud experience",
        "Infrastructure as Code (Terraform)",
        "CI/CD pipeline design",
        "Monitoring and observability tools"
      ],  
      technologies: ["Kubernetes", "Docker", "AWS", "Terraform", "Prometheus", "Grafana"],
      postedDate: "1 week ago",
      applicationUrl: "https://vercel.com/careers"
    },
    {
      id: "3",
      title: "Open Source Community Manager", 
      company: "MongoDB",
      location: "New York",
      type: "Full-time" as const,
      salary: "$90k - $120k",
      description: "Lead community initiatives for our open source database projects. Engage with developers, organize events, and help grow our contributor base worldwide.",
      requirements: [
        "Community management experience",
        "Technical writing skills", 
        "Event planning experience",
        "Social media management",
        "Developer ecosystem knowledge"
      ],
      technologies: ["MongoDB", "Node.js", "Python", "Docker", "GitHub", "Slack"],
      postedDate: "3 days ago", 
      applicationUrl: "https://mongodb.com/careers"
    },
    {
      id: "4",
      title: "Rust Systems Programmer",
      company: "Stripe",
      location: "Remote",
      type: "Contract" as const,
      salary: "$150 - $200/hour",
      description: "Build high-performance financial infrastructure using Rust. Work on payment processing systems that handle billions of transactions with zero downtime requirements.",
      requirements: [
        "Expert-level Rust programming",
        "Systems programming experience",
        "Distributed systems knowledge", 
        "Performance optimization skills",
        "Financial services background preferred"
      ],
      technologies: ["Rust", "PostgreSQL", "Redis", "Kafka", "Kubernetes", "gRPC"],
      postedDate: "5 days ago",
      applicationUrl: "https://stripe.com/jobs"
    },
    {
      id: "5",
      title: "Technical Writer - Developer Docs",
      company: "Supabase", 
      location: "Remote",
      type: "Part-time" as const,
      salary: "$60k - $80k",
      description: "Create comprehensive documentation and tutorials for our open source Firebase alternative. Help developers understand and implement our APIs and tools effectively.",
      requirements: [
        "Technical writing portfolio",
        "API documentation experience",
        "JavaScript/TypeScript knowledge",
        "Developer tools familiarity", 
        "Open source project contributions"
      ],
      technologies: ["PostgreSQL", "Next.js", "TypeScript", "Docker", "Git", "Markdown"],
      postedDate: "1 day ago",
      applicationUrl: "https://supabase.com/careers"
    },
    {
      id: "6",
      title: "ML Engineering Lead",
      company: "Hugging Face",
      location: "Remote", 
      type: "Full-time" as const,
      salary: "$180k - $250k",
      description: "Lead our machine learning infrastructure team. Build tools that make ML accessible to everyone, from researchers to production engineers.",
      requirements: [
        "ML infrastructure experience",
        "Python and PyTorch expertise", 
        "Distributed computing knowledge",
        "Team leadership experience",
        "Open source ML contributions"
      ],
      technologies: ["Python", "PyTorch", "Transformers", "Docker", "Kubernetes", "AWS"],
      postedDate: "1 week ago",
      applicationUrl: "https://huggingface.co/careers"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const jobStats = [
    { label: "Total Jobs", value: jobs.length.toString(), icon: Briefcase },
    { label: "Companies", value: new Set(jobs.map(j => j.company)).size.toString(), icon: Building },  
    { label: "Remote Jobs", value: jobs.filter(j => j.location === "Remote").length.toString(), icon: MapPin },
    { label: "This Week", value: jobs.filter(j => j.postedDate.includes("day") || j.postedDate.includes("week")).length.toString(), icon: Filter },
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
            Open Source Jobs
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover opportunities at companies building the future with open source technology. 
            From startups to tech giants, find your next career move.
          </motion.p>
        </div>
      </section>

      {/* Job Stats */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {jobStats.map((stat, index) => (
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

      {/* Search and Filters */}
      <section className="pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-card rounded-2xl p-6 shadow-soft mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>

              {/* Job Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Jobs Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters to find more opportunities.
              </p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedType("All");
                setSelectedLocation("All");
              }}>
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Post a Job CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center bg-gradient-hero rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              Hiring Open Source Talent?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Connect with passionate developers who contribute to open source projects. 
              Post your job and reach our community of innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Post a Job
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;