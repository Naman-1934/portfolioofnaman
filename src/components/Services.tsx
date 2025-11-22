import { Card } from "@/components/ui/card";
import { Database, BarChart3, TrendingUp, FileSearch } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Data Analysis",
      description: "End-to-end analysis: data gathering, cleaning, exploratory data analysis (EDA) and actionable insights extraction.",
      color: "bg-chart-1",
    },
    {
      icon: BarChart3,
      title: "Dashboard Creation",
      description: "Interactive dashboards with Power BI for vendor performance tracking, KPI monitoring, and real-time analytics.",
      color: "bg-chart-2",
    },
    {
      icon: TrendingUp,
      title: "Model Development",
      description: "Build, evaluate and deploy predictive models using Python. Includes feature engineering and model validation.",
      color: "bg-chart-3",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Database design, SQL query optimization, data pipeline setup, and ETL processes for efficient data workflows.",
      color: "bg-chart-4",
    },
  ];

  return (
    <section id="services" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Awesome <span className="text-accent">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data analytics services to transform your raw data into actionable insights and drive informed decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8" style={{ color: `hsl(var(--${service.color.replace('bg-', '')}))` }} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-accent/5">
              <p className="text-lg font-semibold mb-2">Interested in working together?</p>
              <p className="text-muted-foreground mb-4">
                Available for hourly or project-based engagements
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                Contact for Quote →
              </button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
