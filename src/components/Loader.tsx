import { useState, useEffect } from "react";
import { Plane, CreditCard, DollarSign } from "lucide-react";

const Loader = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const icons = [
    <Plane className="w-16 h-16 text-primary" key="plane" />,
    <CreditCard className="w-16 h-16 text-primary" key="card" />,
    <DollarSign className="w-16 h-16 text-primary" key="dollar" />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-fade-in">
          <div className="animate-bounce">
            {icons[currentIcon]}
          </div>
        </div>
        <div className="flex gap-2">
          {icons.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIcon 
                  ? "bg-primary w-8" 
                  : "bg-primary/30"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
