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
                    <li>Modernized React applications by upgrading legacy class components to modern functional components using React Hooks, improving code maintainability and reducing bugs by 20%.</li>
                    <li>Optimized application performance by implementing lazy loading, code splitting, and Dockerized containers on AWS EC2, reducing application load time by 25%.</li>
                    <li>Enhanced UI/UX with Tailwind CSS, Material UI, and component libraries, designing responsive, user-friendly interfaces that boosted user engagement by 20%.</li>
                    <li>Integrated Django REST Framework to develop secure backend services with middleware, session management, and cookie-based authentication.</li>
                    <li>Implemented CI/CD pipelines using Jenkins and Docker, automating deployment processes and reducing deployment time by 30%.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Associate Software Engineer
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Cybersoft Vantage (CSV) • Jan 2023 - Dec 2023 • Islamabad, Pakistan
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Created website layouts and user interfaces using HTML, CSS, SCSS, Bootstrap, Tailwind, Styled Components, Material UI, Semantic UI, and Ant Design.</li>
                    <li>Utilized Git for version control with GitHub, GitLab, and Bitbucket, ensuring code reviews and traceable changes.</li>
                    <li>Managed project tasks and timelines using Asana and ClickUp, collaborating with cross-functional teams in an agile environment.</li>
                    <li>Implemented MERN stack solutions (MongoDB, Express.js, React/Next.js, Node.js/Next.js) and used PostgreSQL with TypeORM and Prisma for data access.</li>
                    <li>Developed single-page applications (SPAs) with React, leveraging Redux, React Hooks, and Context API for robust state management.</li>
                    <li>Conducted unit tests using Jest and worked with CI/CD pipelines powered by CircleCI and Jenkins.</li>
                    <li>Integrated data from various back-end services and databases and designed REST calls to improve user interface performance.</li>
                    <li>Introduced agile methodologies and development best practices to enhance product development and delivery.</li>
                    <li>Developed web platform backends using Node.js and Django, authoring Python and JavaScript code within the Django framework.</li>
                    <li>Built APIs and data clients to consume third-party APIs, collaborating with back-end developers on API design.</li>
                    <li>Utilized Node.js, ORMs, and SQL/NoSQL databases to develop and manage scalable data layers.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Full Stack Engineer
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Triomatic Solutions • Apr 2021 - Mar 2023 • Remote
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Developed a fully functional admin dashboard using Next.js and React.js to improve data visualization and reporting capabilities.</li>
                    <li>Integrated OCR functionalities into the platform using Flask APIs, enabling text extraction from images and PDFs.</li>
                    <li>Hosted the platform on AWS using EC2, S3, and RDS to ensure high availability, scalability, and security.</li>
                    <li>Utilized PostgreSQL to store and manage data, ensuring data consistency and integrity across the platform.</li>
                    <li>Implemented containerization with Docker to simplify deployment and maintain consistency across environments.</li>
                    <li>Conducted load testing and performance optimization to meet response time SLAs and handle concurrent users.</li>
                    <li>Collaborated with cross-functional teams in an agile environment to deliver features and enhancements.</li>
                    <li>Implemented version control using Git for efficient collaboration and change tracking.</li>
                    <li>Provided technical guidance and mentorship to junior team members, promoting best practices and knowledge sharing.</li>
                    <li>Stayed current with industry trends and emerging technologies to continuously improve the platform and development process.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Trainee (.NET)
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Synergy-IT • Oct 2022 - Feb 2023
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Completed a 6-month bootcamp specializing in C#, .NET, Entity Framework, and LINQ, gaining a comprehensive understanding of the .NET ecosystem.</li>
                    <li>Mastered C# programming fundamentals and advanced concepts for .NET application development.</li>
                    <li>Developed robust and efficient .NET applications, demonstrating proficiency in building scalable solutions.</li>
                    <li>Acquired in-depth knowledge of Entity Framework for data access and manipulation within database-driven applications.</li>
                    <li>Crafted expressive LINQ queries for efficient data retrieval and management.</li>
                    <li>Strengthened problem-solving and software development skills through intensive practical exercises and real-world simulations.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Development Intern
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Luqon IT Solutions and Marketing • May 2022 - Dec 2022
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Developed and redesigned application frontends using Bootstrap with Material Design.</li>
                    <li>Built responsive UIs optimized for desktop, tablet, and mobile devices.</li>
                    <li>Ensured high-performance user interfaces across mobile and desktop platforms.</li>
                    <li>Collaborated with back-end developers during the design and implementation of RESTful APIs.</li>
                    <li>Implemented communication with external web services (Web APIs) using JavaScript.</li>
                    <li>Wrote tested, idiomatic, and well-documented JavaScript, HTML, and CSS.</li>
                    <li>Debugged and optimized code for cross-browser compatibility.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Engineering Intern
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    British Council • May 2019 - Sep 2019
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Full Stack Developer
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Upwork • Sep 2022 - Present • Remote
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                    <li>Successfully completed multiple client projects with five-star ratings, demonstrating proficiency in React.js, Next.js, and AWS.</li>
                    <li>Developed fully functional admin dashboards using React.js and Next.js, enabling users to manage team members and subscriptions.</li>
                    <li>Delivered an education-focused platform integrated with multiple APIs and databases, leveraging React.js to provide a seamless user experience and improved reporting.</li>
                    <li>Collaborated with cross-functional client teams, including designers and stakeholders, to define requirements and deliver high-quality web solutions.</li>
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
                    <li>Designed and developed full stack web applications using React.js, Next.js, and Django.</li>
                    <li>Engineered RESTful APIs with Node.js, Express, and Django REST Framework.</li>
                    <li>Created responsive UI/UX using Tailwind CSS and Material UI, boosting user engagement by 20%.</li>
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

