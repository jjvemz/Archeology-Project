const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ArcheoVault</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing ancient civilizations to life through extraordinary 
              archaeological discoveries and immersive experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Exhibition</a></li>
              <li><a href="#artifacts" className="hover:text-primary-foreground transition-colors">Featured Artifacts</a></li>
              <li><a href="#details" className="hover:text-primary-foreground transition-colors">Visitor Information</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Virtual Tour</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="text-primary-foreground/80 space-y-2">
              <p>Museum of Natural History</p>
              <p>1234 Heritage Avenue</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@archeovault.org</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; 2024 ArcheoVault Exhibition. All rights reserved. | Created with archaeological passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;