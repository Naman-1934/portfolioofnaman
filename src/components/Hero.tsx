import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Available for Internship & Full-Time Roles
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Hi! I Am <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Naman Shah
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Data Analyst | M.Tech CSE at Parul University
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Specializing in data cleaning, model development, and dashboard creation. 
              Experienced with Python, SQL, Power BI, and Excel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:naman532002@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">naman532002@gmail.com</span>
              </a>
              <a 
                href="tel:+919427313076" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 94273 13076</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/naman-shah-14818724a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Professional headshot */}
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-card shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Naman Shah - Data Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <a 
                href="/Naman%20Shah%20-%20Resume.pdf" 
                download
                className="absolute -right-4 top-20 bg-card rounded-xl shadow-lg p-4 animate-float hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Resume</p>
                    <p className="text-xs text-muted-foreground">Available</p>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
