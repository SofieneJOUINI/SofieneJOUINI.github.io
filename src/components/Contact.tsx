import { Mail, MapPin, Phone, Plane, Send, CreditCard } from "lucide-react";
import { profileConfig, uiConfig } from "@/config/profileData";
import paperPlane from "@/assets/paper-plane.png";

const Contact = () => {
  const { contact: contactUI } = uiConfig;
  const { contact: contactData } = profileConfig;
  
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      gradient: "from-primary/20 via-primary/10 to-transparent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactData.phone,
      href: `tel:${contactData.phone}`,
      gradient: "from-accent/20 via-accent/10 to-transparent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactData.location,
      href: null,
      gradient: "from-secondary/30 via-secondary/10 to-transparent"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden scroll-mt-20">
      {/* Airline-themed background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flight path lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,20 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-primary"
            strokeDasharray="2,2"
          />
          <path
            d="M0,70 Q30,40 60,70 T100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15"
            className="text-primary"
            strokeDasharray="1,3"
          />
        </svg>
        
        {/* Floating plane icons */}
        <Plane className="absolute top-10 right-[15%] w-8 h-8 text-primary/10 rotate-45 animate-pulse" />
        <CreditCard className="absolute bottom-20 left-[10%] w-6 h-6 text-primary/10 -rotate-12" />
        <Plane className="absolute top-1/3 left-[5%] w-5 h-5 text-primary/5 -rotate-45" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with boarding pass style */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Send className="w-4 h-4" />
            <span>{contactUI.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {contactUI.sectionTitle} <span className="text-gradient">{contactUI.sectionTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {contactUI.description}
          </p>
        </div>

        {/* Boarding Pass Card */}
        <div className="glass-card rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-fade-in">
          {/* Ticket Header */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm uppercase tracking-wider">{contactUI.boardingPassLabel}</p>
                  <p className="text-primary-foreground font-bold text-lg sm:text-xl">{contactUI.boardingPassTitle}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider">Gate</p>
                <p className="text-primary-foreground font-bold text-2xl sm:text-3xl">{contactUI.gate}</p>
              </div>
            </div>
          </div>

          {/* Ticket Perforation */}
          <div className="relative h-4 bg-background">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-r-full -ml-4 border-r border-dashed border-border" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-l-full -mr-4 border-l border-dashed border-border" />
            <div className="absolute inset-x-8 top-1/2 border-t border-dashed border-border/50" />
          </div>

          {/* Ticket Body */}
          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {contactItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  className={`group relative p-5 rounded-2xl bg-gradient-to-br ${item.gradient} border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 break-all">
                    {item.value}
                  </p>

                  {/* Hover arrow */}
                  {item.href && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Flight Route Visual */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{contactUI.originText}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{contactUI.originLabel}</p>
                </div>
                
                <div className="flex-1 mx-4 sm:mx-8 relative">
                  <div className="border-t-2 border-dashed border-primary/30" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-background p-2 rounded-full">
                      <img 
                        src={paperPlane} 
                        alt="Paper plane" 
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-pulse"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-gradient">{contactUI.destinationText}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{contactUI.destinationLabel}</p>
                </div>
              </div>
            </div>

            {/* Barcode */}
            <div className="mt-6 flex justify-center">
              <div className="flex gap-[2px] opacity-30">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-foreground"
                    style={{
                      width: Math.random() > 0.5 ? '2px' : '1px',
                      height: `${20 + Math.random() * 10}px`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
