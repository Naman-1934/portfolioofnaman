import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import vendorPerformance from "@/assets/vendor-performance.png";
import customerBehavior from "@/assets/customer-behavior.png";
import ecommerceSales from "@/assets/ecommerce-sales.png";
import cricketBest11 from "@/assets/cricket-best11.png";
import djangoPortfolio from "@/assets/django-portfolio.png";
import qrMenuGenerator from "@/assets/qr-menu-generator.png";

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
      url: "https://ibb.co/FkpRMn97",
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
      url: "https://ibb.co/WNjgd0V3",
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
      url: "https://ibb.co/mrh4D9Jm",
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
      url: "https://ibb.co/1t933sVV",
    },
    {
      title: "Dynamic Portfolio Website",
      subtitle: "Personal Portfolio with Django",
      description: "A fully dynamic and responsive portfolio website built using Django, HTML, and CSS. Features a sticky left sidebar with profile information that remains fixed while the right content section smoothly scrolls, creating an engaging user experience. All interactive features are fully functional with seamless navigation between sections.",
      tech: ["Django", "HTML", "CSS", "Python"],
      highlights: [
        "Sticky sidebar navigation",
        "Dynamic scrollable content",
        "Responsive design layout",
        "Fully functional interactions"
      ],
      image: djangoPortfolio,
      url: "https://ibb.co/Xr88G9Wv",
    },
    {
      title: "Restaurant QR Menu Generator",
      subtitle: "Contactless Menu Solution",
      description: "A web application designed to help restaurants create contactless digital menus. Simply enter the restaurant name and Google Drive URL containing the menu, and the system generates a downloadable QR code. This solution promotes hygiene and convenience for customers while reducing physical contact with traditional menus.",
      tech: ["Python", "QR Code Library", "Web Development"],
      highlights: [
        "Instant QR code generation",
        "Google Drive integration",
        "Easy download functionality",
        "Hygiene-focused solution"
      ],
      image: qrMenuGenerator,
      url: "https://ibb.co/hRVgn7LM",
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

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="bg-muted overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-contain max-h-[220px] rounded-lg"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <ExternalLink className="w-3 h-3 text-primary" />
                      Key Highlights
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-1 text-xs">
                          <span className="text-primary mt-0.5">✓</span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 w-full">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
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
