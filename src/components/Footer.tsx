export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">R</span>
              </div>
              <span className="text-xl font-bold">Resumint</span>
            </div>
            <p className="text-muted-foreground">
              The fastest way to create ATS-optimized resumes that get you hired.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a></div>
              <div><a href="#features" className="hover:text-foreground transition-colors">Features</a></div>
              <div><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></div>
              {/*<div><a href="#" className="hover:text-foreground transition-colors">Examples</a></div>*/}
            </div>
          </div>

          {/*<div>*/}
          {/*  <h4 className="font-semibold mb-4">Support</h4>*/}
          {/*  <div className="space-y-2 text-sm text-muted-foreground">*/}
              {/*<div><a href="#" className="hover:text-foreground transition-colors">Help Center</a></div>*/}
              {/*<div><a href="#" className="hover:text-foreground transition-colors">Resume Tips</a></div>*/}
              {/*<div><a href="#" className="hover:text-foreground transition-colors">ATS Guide</a></div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></div>
              {/*<div><a href="#" className="hover:text-foreground transition-colors">About</a></div>*/}
              <div><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Refund Policy</a></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Resumint. All rights reserved. Built to help you land your dream job.</p>
        </div>
      </div>
    </footer>
  );
}
