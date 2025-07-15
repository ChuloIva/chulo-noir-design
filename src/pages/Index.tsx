import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const research = [
    {
      title: "Representation Engineering - Mental Health Interventions",
      description: "Explores representation engineering for mental health insights using fine-tuned Mistral 7B on depressive datasets. Features contrastive PCA vector extraction, 30+ cognitive pairs testing, and LLM-as-judge evaluation. Discovers social connection as most effective intervention, validating intrinsic vs extrinsic motivation theories.",
      url: "https://github.com/ChuloIva/Representation-engineering---mental-health-experiments"
    }
  ];

  const projects = [
    {
      title: "MyMind - Therapeutic AI Application",
      description: "A full-stack AI-powered therapeutic assistant that analyzes audio therapy sessions in real time. Features transcription with Whisper, speaker separation with Pyannote, GPT-4.1-nano for sentiment analysis, UMAP/t-SNE visualizations, LangChain RAG, and CBT/schema therapy modules. Built with FastAPI, PostgreSQL, and React.",
      url: "https://github.com/ChuloIva/MyMind"
    },
    {
      title: "Bluesky Bot - Political Discourse Simulator",
      description: "An AI-driven social experiment simulating polarized political conversations. Creates opposing personas that debate current events using Google Generative AI, Reddit data, and news APIs. Features dynamic ideological conversations with real-time context adaptation for political research and debate training.",
      url: "https://github.com/ChuloIva/Bluesky_bot"
    },
    {
      title: "LLM Tweet Bot - Automated Twitter Intelligence",
      description: "Automated Twitter bots that leverage trending topics and AI for enhanced engagement. Features Google Trends integration, multi-source information gathering (Reddit, NewsAPI, Wikipedia), and AI-generated contextual content with user approval mechanisms for timely, relevant social media interactions.",
      url: "https://github.com/ChuloIva/LLM-tweet-bot"
    },
    {
      title: "Therapy LLM Agents - Multi-Agent Psychological Analysis",
      description: "CrewAI-powered therapeutic analysis system using specialized AI agents for comprehensive psychological assessment. Features topic segmentation, cognitive dissonance detection, emotional trauma analysis, and actionable treatment planning from therapy transcripts with structured JSON outputs.",
      url: "https://github.com/ChuloIva/Therapy-LLM-Agents"
    },
    {
      title: "ML Revenue Prediction - Time Series Forecasting",
      description: "End-to-end revenue forecasting workflow using Meta's Prophet. Features data cleansing, exploratory analysis, feature engineering, model configuration, and forecast generation with uncertainty intervals. Includes comprehensive evaluation metrics and actionable insights for data-driven planning.",
      url: "https://github.com/ChuloIva/ML_predict_revenue"
    },
    {
      title: "Sentiment Analysis - European Media Dashboard",
      description: "Comprehensive sentiment analysis project featuring European media freedom visualization, Croatian media trust analysis, and Reddit comment sentiment classification. Includes interactive dashboards with Google search trends, device usage analytics, and Supreme Court decision impact analysis with 78.5% negative sentiment detection.",
      url: "https://github.com/ChuloIva/Sentiment-analysis"
    }
  ];

  const skills = [
    "Python", "Machine Learning", "Data Science", "Large Language Models (LLMs)",
    "Langchain", "LLM evaluation", "Prompt Engineering", "AI Safety", "AI Alignment",
    "AI Research", "AI Engineering", "AI Product Management", "AI Strategy",
    "Data Engineering", "Data Visualization", "OSINT"
  ];

  const certifications = [
    {
      title: "Complete Ethical Hacking Bootcamp - Udemy",
      date: "August 2022",
      url: "https://drive.google.com/drive/folders/1Nsh9-qv_z-18Ii3eVe2o5GjKSpKA7gev?usp=drive_link"
    },
    {
      title: "Python for Data Science: Intermediate - Dataquest",
      date: "September 2021",
      url: "https://drive.google.com/drive/folders/1NSwFhYtbZIi9OPFBtLYn5VkhBfAMRHv3?usp=drive_link"
    },
    {
      title: "OSINT - Open Source Intelligence - Cybersecurity Investigation",
      date: "August 2022",
      url: "https://drive.google.com/drive/folders/1qs5jlgiKMQ09HEmBwQTyPR0rpvnmrLUV?usp=drive_link"
    },
    {
      title: "C2 English Proficiency - EFSET",
      date: "August 2022",
      url: "https://drive.google.com/drive/folders/1iol2h8UWo8JMg-e0YfhFQRDjM6rHSJBU?usp=drive_link"
    },
    {
      title: "Introduction to Digital Journalism - Reuters",
      date: "June 2022",
      url: "https://drive.google.com/drive/folders/1ihDoI83dROcQBqI_Jzz_1WIK2WgCVQd8?usp=drive_link"
    },
    {
      title: "SQL - MySQL for Data Analytics and Business Intelligence - Udemy",
      date: "Ongoing",
      url: null
    }
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:chuloiva.work@gmail.com", label: "chuloiva.work@gmail.com" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ivan-chulo-23573b171/", label: "linkedin.com/in/ivan-chulo" },
    { icon: Github, href: "https://github.com/ChuloIva", label: "github.com/ChuloIva" },
    { icon: Twitter, href: "https://twitter.com/koalacrown", label: "@koalacrown" }
  ];

  return (
    <div className="min-h-screen bg-background font-roboto">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-glow">
            Ivan Chulo
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            Cognitive Scientist & AI Researcher
          </h2>
        </header>

        {/* Contact Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200 group"
                  >
                    <link.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">About Me</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  As a Cognitive Scientist and AI researcher pursuing an MA in Applied Cognitive Science at the University of Zagreb, I specialize in developing intelligent systems that bridge machine learning, psychology, and mental health applications. My research focuses on the intersection of representation engineering, therapeutic AI, and human-centered design, with particular expertise in large language model development, evaluation, and safety.
                </p>
                <p>
                  My technical expertise spans the full AI development lifecycle, from fine-tuning specialized models like Mistral 7B for therapeutic applications to architecting multi-agent systems using frameworks like CrewAI and LangChain. I have extensive experience in LLM evaluation methodologies, including automated assessment systems, prompt engineering, and red teaming approaches for AI safety and alignment. My work in representation engineering has demonstrated how contrastive PCA techniques can extract meaningful psychological vectors, validating intrinsic motivation theories through computational models.
                </p>
                <p>
                  My professional experience includes leading AI innovation at Aurelia Global Wellness, where I engineered feedback systems powered by large language models and designed multi-LLM agent synchronization architectures. I combine technical depth in areas like time series forecasting, sentiment analysis, and data visualization with a strong foundation in psychological research methodologies, OSINT techniques, and ethical AI development practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Section */}
        <section className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Research</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {research.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group animate-scale-in">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
                  >
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group animate-scale-in">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
                  >
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 bg-secondary/70 hover:bg-secondary transition-colors duration-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                    <div>
                      <h4 className="font-medium text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2 mb-16 animate-fade-in">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">University of Zagreb (FER, FFZG), Croatia</h4>
                <p className="text-muted-foreground">MA in Applied Cognitive Science</p>
                <p className="text-sm text-muted-foreground italic">2023 - Present</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground">Aurelia Global Wellness</h4>
                  <p className="text-muted-foreground text-sm mb-2">AI Engineer & Innovation Lead</p>
                  <p className="text-sm text-muted-foreground italic mb-3">2024 - 2025</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Architected and engineered feedback systems powered by Large Language Models.</li>
                    <li>Context engineering and system design for multi-LLM agent synchronization.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ines Tehnika</h4>
                  <p className="text-muted-foreground text-sm mb-2">Data Scientist / BI / Marketing Lead</p>
                  <p className="text-sm text-muted-foreground italic mb-3">2022 - 2023</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Leveraged data analysis and ML to predict trends and inform decision-making.</li>
                    <li>Drove e-commerce growth through SEO optimization and data-driven marketing strategies.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground">&copy; 2025 Ivan Chulo</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
