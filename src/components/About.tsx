import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Bio */}
            <Card className="p-8 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="font-semibold text-foreground">Naman Shah</span>, currently pursuing M.Tech in Computer Science & Engineering at Parul University 
                with a strong interest in data analytics. I completed my B.Tech at Vadodara Institute of Engineering and High School at Phoenix School. 
                I've completed a data science internship (Jan–Apr 2024) where I handled data cleaning, model building/testing, and dashboard creation. 
                Actively seeking a job or paid internship to apply my analytical skills.
              </p>
            </Card>

            {/* Education & Experience Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <Card className="p-6 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">M.Tech - Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">Parul University</p>
                    <p className="text-xs text-muted-foreground">2024 - 2026 (In Progress)</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <p className="font-semibold text-foreground">B.Tech - Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">Vadodara Institute of Engineering</p>
                    <p className="text-xs text-muted-foreground">2020 - 2024</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <p className="font-semibold text-foreground">High School</p>
                    <p className="text-sm text-muted-foreground">Phoenix School</p>
                  </div>
                </div>
              </Card>

              {/* Experience */}
              <Card className="p-6 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>
                <div className="border-l-2 border-accent pl-4 space-y-3">
                  <p className="font-semibold text-foreground">Data Analyst Intern - Webbrains Technologies</p>
                  <p className="text-sm text-muted-foreground">Jan 2024 - Apr 2024</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Cleaned & preprocessed raw datasets; handled missing values, outliers and feature engineering</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Built and tested machine learning models; performed model validation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Created interactive dashboards for stakeholders to surface insights</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;