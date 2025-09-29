import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, GraduationCap, BookOpen, X, Twitter } from "lucide-react"
import Link from "next/link"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 glass-effect">
        <div className="container flex h-16 items-center justify-between">
          {/* logo and site title */}
          <Link href="/" className="flex items-center gap-2">
           <img 
        src="/SK_logo.png" 
        alt="Logo" 
        className="w-10 h-10 rounded-full" 
      />
      <span className="font-bold text-xl text-white">Sahil Kadbhane</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
             <Link href="#about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#research" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Research
            </Link>
             {/* <Link href="#courses" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Resume
            </Link> */}
            <Link href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/Sahil Kadbhane Resume 2.pdf">
                    Resume
                  </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://github.com/Sahilrk15" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://www.linkedin.com/in/sahil-kadbhane/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://x.com/iamsahilll015" target="_blank" rel="noopener noreferrer">
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
            </Button>
            {/* <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://scholar.google.com/citations?user=ejyT4NUAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </Link>
            </Button> */}
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-10 md:py-16 lg:py-24 animate-fade-in">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">Sahil Kadbhane</h1>
               <TypingAnimation />
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                Aspiring Software Engineer & AI/ML Engineer with hands-on experience in full-stack web development, Android application development, and intelligent AI/ML systems.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="#contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  asChild
                >
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-zinc-800 shadow-xl shadow-primary/10">
                <Image
                  src="/images/Sahil_Profile.jpg"
                  alt="Sahil Kadbhane"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Me</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-zinc-400">
                  I'm a Software Engineer & AI/ML Engineer with hands-on experience in full-stack web development with a focus on artificial intelligence and machine learning.
                  Passionate about building scalable, secure, and user-centric solutions using technologies like React.js, Node.js, Python, and modern AI frameworks including CNNs, LLMs, and LangChain. Adept at turning complex ideas into real-world applications, from interactive web platforms to AI-powered features. Actively seeking opportunities to contribute to innovative and impactful projects at leading technology companies.
                </p>
                <p className="text-zinc-400">
                  When I'm not coding, you can find me playing crickt or football on the field, reading about the latest AI
                  research, or experimenting with new technologies to solve real-world problems.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Python</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">C</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">C++</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Java</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">JavaScript</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">TypeScript</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Lang Chain</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">OpenAI API</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">OpenCV</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">LLMs</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Docker</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">CNN</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Android</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Redis</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">PyTorch</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">TensorFlow</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Prompt Engineering</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Machine Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Deep Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Reinforcement Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Artificial Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">React</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Next.js</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Tailwind CSS</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Express.js</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">AWS</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">SQL</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Experience</h2>
            <div className="space-y-6">
              <ExperienceItem
                title="Data Science & Machine Learning Intern"
                company="Zaalima Development"
                period="Aug 2025 - Present"
                companyUrl="https://zaalima.in/"
                description="Building ML models at Zaalima Development to drive efficiency and accuracy, achieving 30% faster workflows and reducing prediction errors by 25%. Engineering AI-driven solutions that boosted user engagement and supported measurable growth in active users."
                logo="/images/zaalimadev_logo.jpeg"
              />
              <ExperienceItem
                title="Web Development Intern"
                company="D-Soft Technology"
                companyUrl=""
                period="Feb 2023 – Mar 2023"
                description="Developed responsive web applications using React.js and Node.js, improving cross-browser performance and scalability. Enhanced UI/UX design and accessibility, boosting user satisfaction. Integrated REST APIs and optimized backend workflows, increasing efficiency by 20%."
                logo="/images/D-soft_logo.png"
              />
              <ExperienceItem
                title="Android Application Development Trainee"
                company="Calibers Infotech"
                companyUrl="https://calibersinfotech.com/"
                period="Jun 2020 – Aug 2020"
                description="Built a secure Android-based e-voting system that reduced manual errors by 60%. Implemented multi-layer authentication, encryption protocols, and real-time result tracking. Presented the solution at internal reviews, leading to adoption in pilot academic elections."
                logo="/images/calibers_infotech_logo.jpeg"
              />
              {/* <ExperienceItem
                title="Generative AI Intern"
                company="Scale AI"
                companyUrl="https://scale.com/"
                period="February 2025 - May 2025"
                description="Collaborating with AI researchers to optimize generative model performance through architectural tuning, fine-tuning strategies, and data preprocessing for complex reasoning tasks."
                logo="/images/scaleai_logo.jpg"
              />
             <ExperienceItem
              title="Software Development Engineer Intern"
              company="Q.ai"
              companyUrl="https://q.ai/"
              period="August 2024 - October 2024"
              description="Built full-stack tools and dashboards to support unbiased data generation, deployed deep learning models, and enhanced internal data pipelines under NDA."
              logo="/images/qai.svg"
              />
              <ExperienceItem
                title="Research Apprenticeship"
                company="Department of Biomedical Datascience"
                companyUrl="https://dbds.stanford.edu/"
                period="January 2024 - June 2024"
                description="Worked on computer vision machine learning models to classify strains of infectious keratits under the mentorship of a Post Doctoral Scholar."
                logo="/images/stanford_university_logo.jpg"
              />
              <ExperienceItem
                title="Software Development Engineer Intern"
                company="Empowerly"
                companyUrl="https://empowerly.com/"
                period="May 2023 - March 2024"
                description="Built full-stack features and deployed intelligent bots for marketing automation and data-driven engagement using React, Node.js, PostgreSQL, and LLMs."
                logo="/images/empowerly.png"
              /> */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Resumind"
                description="An enterprise-ready AI-powered Applicant Tracking System (ATS) that matches resumes to job postings with real-time feedback and suggestions. Built with React, serverless architecture, and AI/NLP models for resume parsing, scoring, and improvement tips, ensuring scalable, intelligent hiring."
                tags={["React.js", "Node.js", "LangChain", "Puter", "Docker", "NLP", "TailwindCSS", "OpenAI", "HuggingFace", "Vercel", "Render", "AWS Lambda"]}
                link="https://airesumescreener.vercel.app/"
              />
              <ProjectCard
                title="LiftoffAI"
                description="Mock Interview Simulator with AI-Powered Feedback. Developed and deployed LiftoffAI, a full-stack SaaS that delivers AI-powered mock interviews and personalized feedback to improve candidate performance. - Optimized for scalability, real-time performance, and enterprise-grade reliability to enhance hiring efficiency. "
                tags={["Next.js", "Tailwind CSS", "Framer Motion", "HeadlessUI", "ImageResponse", "TypeScript", "Prettier", "ESLint", "React Webcam", "OpenAI API", "REST API"]}
                link="https://liftoffai.vercel.app/"
              />
              <ProjectCard
                title="ChatBuddy"
                description="Prompt Engineering AI Model- Designed a prompt-optimized AI system using chain prompting and LLMs. Improved response relevance and contextual personalization."
                tags={["Next.js", "Tailwind CSS", "TypeScript", "OpenAI API", "REST API", " Clerk", "Prisma", "Langchain","LLM", "Redis"]}
                link="https://github.com/Sahilrk15/Final-Year-Project.git"
              />
              <ProjectCard
                title="Emotion-Detection-System"
                description="Built a real-time facial emotion recognition tool, achieving high accuracy and low latency. Enhanced user engagement by 40% using emotion-based content delivery."
                tags={["Python", "OpenCV", "SVM", "CNN", "Keras"]}
                link="https://github.com/Sahilrk15/Emotion-Detection-System.git"
              />
              <ProjectCard
                title="Food Delivery Website"
                description="Implemented an food delivery service website."
                tags={["HTML", "CSS", "Front-End"]}
                link="https://github.com/Sahilrk15/Food-Delivery-Service.git"
              />
              <ProjectCard
                title="Metalink NFT Website"
                description="A modern web platform designed for showcasing, buying, and selling NFTs with an intuitive and engaging user experience."
                tags={["HTML", "CSS",]}
                link="https://github.com/Sahilrk15/Metalink-NFT-Website.git"
              />
              {/* <ProjectCard
                title=""
                description=""
                tags={["Next.js", "Tailwind CSS", "Framer Motion", "HeadlessUI", "ImageResponse", "TypeScript", "Prettier", "ESLint", "React Webcam", "OpenAI API", "REST API"]}
                link=""
              /> */}
              
            </div>
            <div className="flex justify-center pt-6">
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                asChild
              >
                <Link href="https://github.com/Sahilrk15" target="_blank" rel="noopener noreferrer">
                  View all projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

         {/* Research Section */}
        <section id="research" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Research</h2>

            <div className="card-gradient border border-zinc-800 rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Prompt Engineering Using Artificial Intelligence
                  </h3>
                  <p className="text-zinc-400">Sahil Kadbhane, Mohammed Sameed, Dhyankumar Patel, Arya Chandorkar</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Prompt Engineering</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Artificial Intelligence</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Chain Prompting</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Conversational AI</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">GPT-3 Model</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Dialogue Flow Engineering</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Applied AI in Real-World Applications</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Intelligent System Design</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Contextually Relevant Interactions</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Chain Processing</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Automation Through AI</Badge>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    asChild
                  >
                    <Link href="https://ijarcce.com/papers/prompt-engineering-using-artificial-intelligence" target="_blank" rel="noopener noreferrer">
                      Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

             <div className="card-gradient border border-zinc-800 rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Enhancing Prompt Engineering Application Using Artificial Intelligence
                  </h3>
                  <p className="text-zinc-400">Sahil Kadbhane, Mohammed Sameed, Dhyankumar Patel, Arya Chandorkar</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Prompt Engineering</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Artificial Intelligence</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Chain Prompting</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Conversational AI</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">GPT-3 Model</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Generative AI</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">GPT (Large Language Models)</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Human-AI Interaction</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Advanced Conversational Interfaces</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Model Fine-Tuning</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Natural Language Processing</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Contextual Prompt Design</Badge>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    asChild
                  >
                    <Link href="https://www.ijett.in/index.php/IJETT/article/view/755" target="_blank" rel="noopener noreferrer">
                      Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        {/* <section id="courses" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Relevant Coursework
              </h2>
              <div className="flex items-center gap-2 text-zinc-400">
                <GraduationCap className="h-5 w-5" />
                <span>UCLA</span>
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-zinc-400 text-sm">
              <p className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-zinc-700"></span>
                <span>Courses numbered 1-99: Lower Division</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <span className="inline-block w-3 h-3 rounded-full bg-zinc-500"></span>
                <span>Courses numbered 100-199: Upper Division</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                <span>Courses numbered 200+: Graduate Level</span>
              </p>
            </div>

            <div className="space-y-8"> */}
              {/* Computer Science Courses */}
              {/* <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white border-l-4 border-primary pl-3">Computer Science, Electrical & Computer Engineering</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CourseCard name="Automated Reasoning: Theory and Applications" code="CS 264A (Grad)" level="grad" />
                  <CourseCard name="Reinforcement Learning" code="COM SCI 260R (Grad)" level="grad" />
                  <CourseCard name="Advanced Deep Learning and Neural Nets" code="ECE C247B (Grad)" level="grad" />
                  <CourseCard name="Deep Learning and Neural Networks" code="ECE C147/247A (Grad)" level="grad" />
                  <CourseCard name="Deep Learning for Computer Vision" code="COM SCI 163" level="upper" />
                  <CourseCard name="Introduction to Algorithms and Complexity" code="COM SCI 180" level="upper" />
                  <CourseCard name="Operating Systems" code="COM SCI 111" level="upper" />
                  <CourseCard name="Software Construction" code="COM SCI 35L" level="lower" />
                </div>
              </div> */}

              {/* Mathematics and Statistics Courses */}
              {/* <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white border-l-4 border-primary pl-3">
                  Mathematics, Statistics
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard name="Machine Learning" code="MATH M156" level="upper" /> 
                  <CourseCard name="Real Analysis" code="MATH 131A" level="upper" />
                  <CourseCard name="Linear Algebra" code="MATH 115A" level="upper" />
                  <CourseCard name="Probability and Statistics 2" code="MATH 170S" level="upper" /> 
                  <CourseCard name="Introduction to Probability" code="STATS 100A" level="upper" />
                </div>
              </div>
            </div> */}
          {/* </div> */}
        {/* </section> */}

        {/* Volunteering Section
        <section id="volunteering" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Volunteering and Campus Activities</h2>
            <div className="space-y-6">
              <ExperienceItem
                title="Learning Assistant"
                company="UCLA Computer Science Department"
                companyUrl="https://www.cs.ucla.edu/"
                period="March 2025 - Present"
                description="Learning Assistant for COM SCI 180: Introduction to Algorithms and Complexity. Lead collaborative discussions, provide one-on-one academic support, and contribute to refining course materials to improve student comprehension and engagement."
                logo="/images/uclacs.jpg"
              />
              <ExperienceItem
                title="Member"
                company="VEST @ UCLA"
                companyUrl=""
                period="January 2025 - Present"
                description="Active member of UCLA’s premier entrepreneurship organization. Leading a product team focused on developing 'Stealth,' a startup concept currently in incubation."
                logo="/images/vest.jpg"
              />
              <ExperienceItem
              title="Computer Engineer (Electrical Subteam)"
              company="Santa Clara University Formula SAE"
              companyUrl=""
              period="September 2023 - May 2024"
              description="Engineered embedded systems and real-time data acquisition tools for SCU’s Formula SAE electric race car. Focused on the Brake Plausibility Device System (BPDS) and Accelerator Pedal Position Sensor (APPS), ensuring both performance and regulatory compliance."
              logo="/images/scuformula.jpg"
            />
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
         <section id="contact" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-zinc-400">
                  I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to
                  me through any of the following channels.
                </p>
                <div className="space-y-4 mt-6">
                   <div className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-all p-3 rounded-md border border-zinc-800 bg-zinc-900/30 hover:border-primary/50 hover:bg-zinc-900/50 duration-300">
                    <Mail className="h-5 w-5 text-zinc-500" />
                    <a href="mailto:sahilkadbhane@gmail.com" className="hover:text-primary transition-colors">sahilkadbhane@gmail.com</a>
                  </div>

                 <div className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-all p-3 rounded-md border border-zinc-800 bg-zinc-900/30 hover:border-primary/50 hover:bg-zinc-900/50 duration-300">
                    <Linkedin className="h-5 w-5 text-zinc-500" />
                    <Link
                      href="https://www.linkedin.com/in/sahil-kadbhane/"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/sahil-kadbhane
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-all p-3 rounded-md border border-zinc-800 bg-zinc-900/30 hover:border-primary/50 hover:bg-zinc-900/50 duration-300">
                    <X className="h-5 w-5 text-zinc-500" />
                    <a href="https://x.com/iamsahilll015" className="hover:text-primary transition-colors">x.com/iamsahilll015</a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800 rounded-lg overflow-hidden shadow-lg shadow-primary/5">
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Send me a message</h3>
                    <p className="text-zinc-400 text-sm">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
       <footer className="border-t border-zinc-800 py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-zinc-500 md:text-left">
            © {new Date().getFullYear()} Sahil Kadbhane. All rights reserved.
          </p>
          <div className="flex gap-4">
             <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://github.com/Sahilrk15" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
             <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://www.linkedin.com/in/sahil-kadbhane/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="mailto:sahilkadbhane@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            {/* <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://scholar.google.com/citations?user=ejyT4NUAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </Link>
            </Button> */}
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string
  description: string
  tags: string[]
  link?: string
}) {
  return (
     <Card className="card-gradient border-zinc-800 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-zinc-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-zinc-400">{description}</CardDescription>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-zinc-700 text-zinc-400 bg-zinc-900/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
         <Button variant="ghost" size="sm" className="ml-auto text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
          {link && (
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto text-zinc-400 hover:text-white hover:bg-zinc-800"
            asChild
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        )}
        </Button>
      </CardFooter>
    </Card>
  )
}

function ExperienceItem({
  title,
  company,
  companyUrl,
  period,
  description,
  logo,
}: {
  title: string
  company: string
  companyUrl: string
  period: string
  description: string
  logo: string
}) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="relative h-12 w-12 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 flex-shrink-0 shadow-lg shadow-primary/5">
        <Image
          src={logo || "/images/qai.svg"}
          alt={`${company} logo`}
          fill
          className="object-cover transition-all group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 border-l-2 border-zinc-800 pl-4 transition-all group-hover:border-primary">
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-500">
            <Link
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {company}
            </Link>{" "}
            | {period}
          </p>
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  )
}


function CourseCard({ name, code, level }: { name: string; code: string, level: "lower" | "upper" | "grad";}) {
  let colorClass = "";
  if (level === "lower") colorClass = "bg-zinc-700";
  else if (level === "upper") colorClass = "bg-zinc-500";
  else if (level === "grad") colorClass = "bg-primary";

  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:bg-zinc-900/70 hover:shadow-md hover:shadow-primary/5">
      <div className="absolute top-2 right-2 h-8 w-8 opacity-10">
        <Image
          src="/ucla-logo.svg"
          alt="UCLA logo"
          width={32}
          height={32}
          className="opacity-30 group-hover:opacity-50 transition-opacity"
        />
      </div>
      <div className="space-y-2">
        <h4 className="font-medium text-white group-hover:text-primary transition-colors">{name}</h4>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-400">
            <span className={`inline-block w-3 h-3 rounded-full mr-1 ${colorClass}`}></span>
            {code}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-xs text-zinc-500">
          <BookOpen className="h-3 w-3" />
          <span>UCLA</span>
        </div>
      </div>
    </div>
  )
}
