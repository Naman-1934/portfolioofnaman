import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin, Download, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Input length limits following security best practices
const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 standard
  phone: 20,
  message: 2000,
};

// Sanitize input by trimming and escaping HTML entities
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Bot detection field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("Chv9iD281PR4rDvyE");
  }, []);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    // Enforce max length on input
    const maxLength = MAX_LENGTHS[field];
    const truncatedValue = value.slice(0, maxLength);
    setFormData({ ...formData, [field]: truncatedValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      return;
    }
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation with stricter regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(formData.email) || formData.email.length > MAX_LENGTHS.email) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation - only allow digits, spaces, +, -, and ()
    if (formData.phone && !/^[\d\s+\-()]*$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS with sanitized inputs
      await emailjs.send(
        'service_ua233rd', // Service ID
        'template_otv6hzc', // Template ID
        {
          from_name: sanitizeInput(formData.name),
          from_email: sanitizeInput(formData.email),
          phone: formData.phone ? sanitizeInput(formData.phone) : 'Not provided',
          message: sanitizeInput(formData.message),
          to_email: 'naman532002@gmail.com',
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "naman532002@gmail.com",
      href: "mailto:naman532002@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94273 13076",
      href: "tel:+919427313076",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "naman-shah-14818724a",
      href: "https://www.linkedin.com/in/naman-shah-14818724a",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready To Get <span className="text-accent">Started?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking for job opportunities or paid internships. Let's discuss how I can help with your data analytics needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - hidden from users, catches bots */}
                <div className="absolute opacity-0 -z-10" aria-hidden="true">
                  <Input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    maxLength={MAX_LENGTHS.name}
                    disabled={isLoading}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {formData.name.length}/{MAX_LENGTHS.name}
                  </p>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    maxLength={MAX_LENGTHS.email}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone (Optional)"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    maxLength={MAX_LENGTHS.phone}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    maxLength={MAX_LENGTHS.message}
                    disabled={isLoading}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {formData.message.length}/{MAX_LENGTHS.message}
                  </p>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-4 mb-4">
                  <Download className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-bold text-lg">Download Resume</h4>
                    <p className="text-sm text-muted-foreground">Get my complete CV in PDF format</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a 
                    href="/Naman%20Shah%20-%20Resume.pdf" 
                    download
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume (PDF)
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
