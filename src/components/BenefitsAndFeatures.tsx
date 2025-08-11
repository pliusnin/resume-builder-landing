import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  CheckCircle,
  Download,
  Zap,
  Shield,
  Award,
  FileText,
  Target,
  Sparkles,
  BarChart3,
  RefreshCw
} from "lucide-react";
import createResumeImage from '../images/5min-create.jpg';
import atsOptimizedImage from '../images/ats-optimized.jpg';
import pdfDownload from '../images/pdf-download.jpg';

export function BenefitsAndFeatures() {
  const mainBenefits = [
    {
      icon: Zap,
      title: "5-Minute Resume Creation",
      description: "Our system guides you through each step, creating a professional resume in minutes, not hours.",
      image: createResumeImage,
      validationPoints: ["Time-Saving Technology", "Easy to Use"]
    },
    {
      icon: Shield,
      title: "100% ATS Optimized",
      description: "Every template is designed to pass through applicant tracking systems with flying colors.",
      image: atsOptimizedImage,
      validationPoints: ["Proven Results", "Industry Compliant"]
    },
    {
      icon: Download,
      title: "Instant PDF Download",
      description: "Get your polished, professional resume as a high-quality PDF ready to send to employers.",
      image: pdfDownload,
      validationPoints: ["Professional Quality", "Ready to Send"]
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "Professional Templates",
      description: "Choose from dozens of industry-specific, recruiter-approved templates"
    },
    {
      icon: Target,
      title: "Keyword Optimization",
      description: "AI suggests relevant keywords to match job descriptions"
    },
    {
      icon: BarChart3,
      title: "ATS Score Checker",
      description: "Real-time feedback on your resume's ATS compatibility"
    },
    {
      icon: Sparkles,
      title: "Smart Content Suggestions",
      description: "AI-powered recommendations for better bullet points"
    },
    {
      icon: RefreshCw,
      title: "Easy Updates",
      description: "Quickly tailor your resume for different job applications"
    },
    {
      icon: Award,
      title: "Industry Standards",
      description: "Templates follow current hiring manager preferences"
    }
  ];

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Marketing Manager",
  //     company: "Tech Corp",
  //     content: "Resumint helped me land my dream job! The ATS optimization really works - I got 3x more interview calls.",
  //     avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1-c?w=150&h=150&fit=crop&face"
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Software Engineer",
  //     company: "StartupXYZ",
  //     content: "Cut my resume creation time from 8 hours to 5 minutes. The templates are professional and modern.",
  //     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&face"
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Data Analyst",
  //     company: "Fortune 500",
  //     content: "Finally, a resume builder that actually understands what recruiters want. Highly recommend!",
  //     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face"
  //   }
  // ];

  return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Benefits */}
          <div className="text-center space-y-4 mb-20">
            <Badge variant="secondary" className="px-4 py-2">
              Why Choose Resumint
            </Badge>
            <h2 className="text-3xl md:text-5xl">
              From <span className="text-destructive">Struggle</span> to <span className="text-primary">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your job search with resumes that actually get results.
              No more guesswork, no more rejection.
            </p>
          </div>

          <div className="space-y-20">
            {mainBenefits.map((benefit, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground">{benefit.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit.validationPoints[0]}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit.validationPoints[1]}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <ImageWithFallback
                        src={benefit.image}
                        alt={benefit.title}
                        className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
                </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mt-32">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl">Powerful Features That <span className="text-primary">Work</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create winning resumes that get you hired faster.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-32">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl">Join <span className="text-primary">50,000+</span> Job Seekers</h2>
              <p className="text-xl text-muted-foreground">Who landed their dream jobs with Resumint</p>
            </div>

            {/*<div className="grid md:grid-cols-3 gap-8">*/}
            {/*  {testimonials.map((testimonial, index) => (*/}
            {/*      <Card key={index} className="hover:shadow-lg transition-shadow">*/}
            {/*        <CardContent className="p-6">*/}
            {/*          <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>*/}
            {/*          <div className="flex items-center space-x-4">*/}
            {/*            <ImageWithFallback*/}
            {/*                src={testimonial.avatar}*/}
            {/*                alt={testimonial.name}*/}
            {/*                className="w-12 h-12 rounded-full"*/}
            {/*            />*/}
            {/*            <div>*/}
            {/*              <div className="font-semibold">{testimonial.name}</div>*/}
            {/*              <div className="text-sm text-muted-foreground">*/}
            {/*                {testimonial.role} at {testimonial.company}*/}
            {/*              </div>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </CardContent>*/}
            {/*      </Card>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>

          {/* Stats */}
          <div className="mt-20 bg-primary text-primary-foreground p-12 rounded-3xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl mb-2">50K+</div>
                <div className="opacity-90">Resumes Created</div>
              </div>
              <div>
                <div className="text-4xl mb-2">94%</div>
                <div className="opacity-90">ATS Pass Rate</div>
              </div>
              <div>
                <div className="text-4xl mb-2">3.2x</div>
                <div className="opacity-90">More Interviews</div>
              </div>
              <div>
                <div className="text-4xl mb-2">5 min</div>
                <div className="opacity-90">Average Creation Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
