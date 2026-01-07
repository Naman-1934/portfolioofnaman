import { Card } from "@/components/ui/card";
import { Database, BarChart3, Code, FileSpreadsheet } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", level: 85, icon: Code, color: "bg-chart-1" },
    { name: "SQL", level: 80, icon: Database, color: "bg-chart-2" },
    { name: "Power BI", level: 90, icon: BarChart3, color: "bg-chart-3" },
    { name: "Excel", level: 85, icon: FileSpreadsheet, color: "bg-chart-4" },
  ];

  const tools = [
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Flask",
    "Django",
    "matplotlib",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Tools</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Core Skills with Bars */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 animate-fade-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${skill.color} bg-opacity-10 flex items-center justify-center`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color.replace('bg-', '')}`} style={{ color: `hsl(var(--${skill.color.replace('bg-', '')}))` }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <Card className="p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
