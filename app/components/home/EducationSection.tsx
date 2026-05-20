import { GraduationCap, BookOpen } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      school: "Royal University of Phnom Penh",
      period: "2022 - Present",
      major: "Information Technology Engineering",
      description: "Currently in my 4th year of Bachelor's degree. Awarded a full 4-year scholarship covering tuition fees for outstanding academic performance.",
      icon: BookOpen
    },
    {
      school: "High School National Exam (BacII)",
      period: "2022",
      major: "Science Track",
      description: "Graduated with Grade B in the National Exam, demonstrating strong academic foundations in mathematics and science.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-blue/50" />
          <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">Education</span>
          <div className="w-8 h-[1px] bg-accent-blue/50" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4">Educational <span className="text-gradient-accent">Journey</span></h2>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">My academic background and continuous learning path in technology.</p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {education.map((item, index) => (
            <div key={index} className="group relative h-full">
              <div className="relative h-full flex flex-col bg-glass-bg border border-glass-border rounded-2xl p-6 transition-all duration-300 hover:border-accent-blue/30 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                    <item.icon size={24} />
                  </div>
                  <span className="text-accent-blue font-bold text-sm">{item.period}</span>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                    {item.school}
                  </h3>
                  <p className="text-accent-blue/80 text-sm font-semibold">{item.major}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
