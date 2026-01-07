import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import vendorPerformance from "@/assets/vendor-performance.png";
import customerBehavior from "@/assets/customer-behavior.png";
import ecommerceSales from "@/assets/ecommerce-sales.png";
import cricketBest11 from "@/assets/cricket-best11.png";

const Projects = () => {
  const projects = [
    {
      title: "Vendor Performance Dashboard",
      subtitle: "Sales & Profitability Analytics",
      description: "This dashboard provides a comprehensive sales and profitability overview, highlighting total sales, purchases, gross profit, profit margin, and unsold capital along with vendor and brand-wise performance. It helps identify top contributors and low-performing vendors/brands to support data-driven inventory and profitability decisions.",
      tech: ["Power BI", "SQL", "Excel"],
      highlights: [
        "Total sales & profit tracking",
        "Vendor & brand-wise analysis",
        "Low performer identification",
        "Purchase contribution visualization"
      ],
      image: vendorPerformance,
      url: "https://ibb.co/sdTxzfzH",
    },
    {
      title: "Retail Customer Behavior & Shopping Trends Dashboard",
      subtitle: "E-Commerce Customer Analytics",
      description: "This project presents a Customer Behavior Dashboard that analyzes e-commerce data to track customer count, average purchase value, ratings, and revenue across categories, age groups, and subscription status, enabling data-driven business insights.",
      tech: ["Power BI", "SQL", "Excel"],
      highlights: [
        "Customer segmentation analysis",
        "Revenue by category tracking",
        "Age group behavior insights",
        "Subscription status analytics"
      ],
      image: customerBehavior,
      url: "https://ibb.co/9mqHtLXr",
    },
    {
      title: "E-Commerce Sales Dashboard",
      subtitle: "Comprehensive Sales Analytics",
      description: "E-commerce sales details include insights on total sales revenue, number of orders, profit, and average order value, along with breakdowns by product category, region, customer segment, and time period. The analysis helps track sales trends, identify top-performing products, and understand customer purchasing behavior for better business decisions.",
      tech: ["Power BI", "SQL", "Excel"],
      highlights: [
        "Multi-category sales tracking",
        "Payment mode analysis",
        "State-wise performance metrics",
        "Profit by sub-category insights"
      ],
      image: ecommerceSales,
      url: "#",
    },
    {
      title: "Cricket Best-11",
      subtitle: "T20 World Cup Player Analysis",
      description: "This project features a cricket player performance analysis dashboard that evaluates power hitters using metrics such as runs, strike rate, batting average, and boundary percentage. It enables data-driven player comparison and optimal team selection through interactive visuals and role-based insights.",
      tech: ["Power BI", "Python", "SQL", "Excel"],
      highlights: [
        "Player performance metrics",
        "Strike rate & boundary analysis",
        "Role-based player categorization",
        "Interactive player comparison"
      ],
      image: cricketBest11,
      url: "#",
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
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
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
