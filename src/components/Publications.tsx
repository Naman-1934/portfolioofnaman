import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ieeePublication from "@/assets/ieee-publication.png";

const Publications = () => {
  return (
    <section id="achievement" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Achievement
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-chart-1 to-chart-2 mx-auto rounded-full"></div>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={ieeePublication}
                  alt="IEEE Publication - Hybrid Deep Learning Models in Stock Market Forecasting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-chart-1 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    IEEE Published
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                  My review paper has been published in IEEE
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Published a peer-reviewed review paper in IEEE, focusing on the comprehensive analysis of existing research, methodologies, and recent advancements in the chosen domain. The paper systematically compares state-of-the-art techniques and highlights research gaps to guide future work.
                </p>
                <Button 
                  asChild 
                  className="w-fit bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                >
                  <a 
                    href="https://ieeexplore.ieee.org/document/11308590" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Publications;
