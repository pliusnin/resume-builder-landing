import { AlertCircle, Clock, FileX, Zap } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: Clock,
      title: "Hours of Formatting",
      description: "Spending endless time trying to make your resume look professional instead of focusing on content."
    },
    {
      icon: FileX,
      title: "ATS Resume Rejection",
      description: "Your resume gets filtered out by applicant tracking systems before humans even see it."
    },
    {
      icon: AlertCircle,
      title: "Inconsistent Results",
      description: "Never knowing if your resume format will work across different companies and systems."
    },
    {
      icon: Zap,
      title: "Missed Opportunities",
      description: "Losing out on job opportunities because your resume doesn't meet modern standards."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl">
            Tired of These <span className="text-destructive">Resume Struggles</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not alone. Millions of job seekers waste countless hours on resume formatting
            and still get rejected by ATS systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">73%</div>
              <div className="text-muted-foreground">of resumes never reach human recruiters</div>
            </div>
            <div>
              <div className="text-3xl mb-2">6 hours</div>
              <div className="text-muted-foreground">average time spent formatting resumes</div>
            </div>
            <div>
              <div className="text-3xl mb-2">40%</div>
              <div className="text-muted-foreground">of job seekers use outdated resume formats</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
