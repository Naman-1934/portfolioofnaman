import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import cricketDashboard from "@/assets/cricket-dashboard.png";
import vendorDashboard from "@/assets/vendor-dashboard.png";

const Projects = () => {
  const projects = [
    {
      title: "Best 11 T20 Cricket Team",
      subtitle: "2022 T20 World Cup Analysis",
      description: "Analyzed player performance data from the 2022 T20 World Cup and created an algorithmic selection of the best XI based on key performance metrics including batting strike rate, bowling economy, and fielding statistics.",
      tech: ["Python", "pandas", "matplotlib", "NumPy"],
      highlights: [
        "Processed 500+ player records",
        "Multi-criteria decision analysis",
        "Interactive performance visualizations",
        "Statistical validation of selections"
      ],
      image: cricketDashboard,
      url: "https://ibb.co/sdTxzfzH",
    },
    {
      title: "Vendor Performance Dashboard",
      subtitle: "Power BI Analytics Solution",
      description: "Built an interactive Power BI dashboard to compare vendor performance across multiple KPIs. Highlights best/worst performers with actionable recommendations for procurement optimization.",
      tech: ["Power BI", "SQL", "DAX", "Excel"],
      highlights: [
        "Real-time KPI tracking",
        "Vendor comparison matrix",
        "Cost savings identification",
        "Interactive drill-down features"
      ],
      image: vendorDashboard,
      url: "https://ibb.co/9mqHtLXr",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world data analytics projects showcasing end-to-end analysis, visualization, and insights generation.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Project Visual */}
                  <div className="md:col-span-2 bg-muted overflow-hidden flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-3 p-8">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Case Study
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <p className="text-muted-foreground mb-4">
              More projects available on request, including GitHub repositories and Jupyter notebooks
            </p>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
