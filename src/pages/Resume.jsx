import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';

function Resume() {
  return (
    <section id="resume" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Professional Dossier • Est. 2019 • Volume V
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          CURRICULUM VITAE
        </h3>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "A comprehensive record of professional experience, technical expertise, and educational achievements"
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="border border-foreground/20 bg-background/50 p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold font-serif text-foreground mb-2">
                Hassan Sajjad
              </h2>
              <p className="text-sm text-muted-foreground font-serif">
                Full Stack Web Developer
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/salaar-khan-resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/30 hover:bg-foreground/5 transition-colors font-serif text-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="space-y-4 text-sm font-serif">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Contact Information
              </h3>
              <div className="space-y-1 text-foreground/80">
                <p>Email: salaarkhan.dev@gmail.com</p>
                <p>Phone: +92 (304) 1540073</p>
                <p>Location: Pakistan</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://github.com/salaarkhan-dev" target="_blank" rel="noopener noreferrer" className="text-xs underline hover:text-foreground">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/salaarkhan-dev" target="_blank" rel="noopener noreferrer" className="text-xs underline hover:text-foreground">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-foreground/10">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Summary
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Innovative Full Stack Web Developer with 5 years of experience enhancing web application performance and user engagement. Modernized React applications by 20% through advanced component updates and implemented Dockerized containers on AWS EC2, cutting load times by 25%. Seeking opportunities to leverage expertise in React, Django, and CI/CD pipelines to drive scalable solutions and enrich user experiences.
              </p>
            </div>
            
            <div className="pt-4 border-t border-foreground/10">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Core Competencies
              </h3>
              <p className="text-foreground/80">
                React.js, Next.js, Django, Node.js, Nest.js, Tailwind CSS, Material UI, ShadCN, Prisma, PostgreSQL, AWS, Docker, Jenkins, CI/CD, SonarQube, Python, TypeScript, JavaScript
              </p>
            </div>
            
            <div className="pt-4 border-t border-foreground/10">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Full Stack Web Developer
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    12 Tech • March 2023 - Present • Cranford, NJ
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Modernized React Applications: Upgraded legacy class components to modern functional components using React Hooks, improving code maintainability and reducing bugs by 20%.</li>
                    <li>Optimized Application Performance: Implemented lazy loading, code splitting, and Dockerized containers on AWS EC2, reducing application load time by 25%.</li>
                    <li>Enhanced UI/UX with Tailwind CSS: Designed responsive, user-friendly interfaces, boosting user engagement by 20%.</li>
                    <li>Integrated Django REST Framework: Developed secure backend services with middleware, session management, and cookie-based authentication.</li>
                    <li>Implemented CI/CD Pipelines: Automated deployment processes using Jenkins and Docker, reducing deployment time by 30%.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Full Stack Web Developer
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Cybersoft Vantage • March 2022 - February 2023 • Islamabad, Pakistan
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Engineered Scalable Single Page Applications (SPAs) using React, Redux, and Tailwind CSS, resulting in a 30% increase in user engagement.</li>
                    <li>Optimized Database Performance: Enhanced database efficiency by optimizing stored procedures and triggers in PostgreSQL, reducing query execution time by 40%.</li>
                    <li>Developed RESTful APIs with Nest.js: Built scalable and secure RESTful APIs, improving backend efficiency by 35%.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Freelance Full Stack Developer
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Self-Employed • February 2020 - February 2022 • Remote
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Designed and Developed Full Stack Web Applications using React.js, Next.js, and Django.</li>
                    <li>Engineered RESTful APIs: Developed high-performance RESTful APIs with Node.js, Express, and Django REST Framework.</li>
                    <li>Created Responsive UI/UX Designs using Tailwind CSS and Material UI, boosting user engagement by 20%.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-foreground/10">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Education
              </h3>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-sm text-foreground/80">
                  COMSATS University Islamabad • 2022 • GPA: 3.45
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-foreground/10">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Certifications
              </h3>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  React & Next.js Certification
                </h4>
                <p className="text-sm text-foreground/80">
                  Udemy • 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 hover:bg-foreground/5 transition-colors font-serif text-sm"
          >
            <FileText className="w-4 h-4" />
            Return to Portfolio
          </Link>
        </div>
      </div>
      
      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>RESUME</span>
      </div>
    </section>
  );
}

export default Resume;

