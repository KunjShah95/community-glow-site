import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  event: [
    { name: "About", path: "/about" },
    { name: "Schedule", path: "/schedule" },
    { name: "Speakers", path: "/speakers" },
    { name: "Gallery", path: "/gallery" },
  ],
  community: [
    { name: "Code of Conduct", path: "/code-of-conduct" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Sponsor", path: "/sponsor" },
    { name: "Blog", path: "/blog" },
  ],
  resources: [
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Press Kit", path: "/press" },
    { name: "Previous Events", path: "/previous" },
  ]
};

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/opentechconnect" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/opentechconnect" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/opentechconnect" },
  { name: "Email", icon: Mail, url: "mailto:hello@opentechconnect.dev" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="font-display font-bold text-xl">OpenTech Connect</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                The premier open-source community event bringing together developers, innovators, 
                and tech enthusiasts to shape the future of technology through collaboration.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Event</h3>
              <ul className="space-y-3">
                {footerLinks.event.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-8">
              Get the latest news, speaker announcements, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 OpenTech Connect. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};