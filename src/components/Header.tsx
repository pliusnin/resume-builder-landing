import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import demoResult from '../images/demo-result.jpg';

export function Header() {
  return (
    <header className="bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-primary">Resumint</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Build Professional Resumes in <span className="text-primary">Minutes</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Skip the hours of formatting and guesswork. Create professional, ATS-friendly resumes that get you noticed by employers and land you interviews.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Create My Perfect Resume
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Upload My Resume
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>PDF Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>5 Min Setup</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src={demoResult}
              alt="Professional resume example"
              className="rounded-2xl shadow-2xl w-120"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">📄</span>
                </div>
                <div>
                  <div className="font-semibold">Resume Ready!</div>
                  <div className="text-sm text-muted-foreground">98% ATS Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
