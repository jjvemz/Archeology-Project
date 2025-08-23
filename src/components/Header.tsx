import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Pacific Congress 2027</h1>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Archaeology & Changing Environment</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#call-papers" className="text-foreground hover:text-primary transition-colors">
              Call for Papers
            </a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors">
              Areas
            </a>
            <a href="#registration" className="text-foreground hover:text-primary transition-colors">
              Registration
            </a>
            <a href="#venue" className="text-foreground hover:text-primary transition-colors">
              Venue
            </a>
            <Button variant="congress">Register Now</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;