import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, Github, Linkedin, Twitter, GraduationCap, BookOpen } from "lucide-react";
import TableOfContents from "@/components/TableOfContents";

const Index = () => {
  const research = [
    {
      title: "HypotheSAEs - Cognitive Pattern Discovery in Depression",
      description: "A specialized neural network framework that automatically discovers interpretable cognitive markers of depression from Reddit text data. Trains Sparse Autoencoders on depression posts vs control subreddits, applies Lasso regression for predictive neuron identification, then uses LLM interpretation for human-readable cognitive pattern hypotheses. Features interactive dashboard and complete reproducible pipeline.",
      url: "https://github.com/ChuloIva/HypotheSAEs-mental-health"
    },
    {
      title: "COT-Steering - Cognitive Pattern Manipulation in Thinking LLMs",
      description: "An adaptation of existing framework for emotional and cognitive contexts. It steers an LLM's thinking output by applying vectors calculated from hidden state activations using the nnsight library. This method manipulates cognitive styles, like depressive rumination, by contrasting them against a healthy thinking baseline. The repository provides a complete pipeline to create, train, and evaluate custom cognitive steering vectors.",
      url: "https://github.com/ChuloIva/COT-steering"
    },
    {
      title: "NNsight Selfie - Model-Agnostic Neural Network Interpretation",
      description: "A model-agnostic implementation of the selfie library using NNsight for neural network interpretation. Extends the original selfie approach to work with any transformer architecture (GPT, BERT, T5, LLaMA) through NNsight's universal interface. Features activation extraction and injection, concept arithmetic, flexible interpretation prompts with placeholders, batch processing, and analysis tools for activation similarity and vector projections. Supports automatic device detection (MPS, CUDA, CPU).",
      url: "https://github.com/ChuloIva/NNsight_Selfie"
    }
  ];

  const publishedResearch = [
    {
      title: "Decomposing Theory of Mind: How Emotional Processing Mediates ToM Abilities in LLMs",
      description: "Recent work shows activation steering substantially improves language models' Theory of Mind (ToM), yet the mechanisms remain unclear. This research decomposes ToM in LLMs by comparing steered versus baseline models using linear probes trained on 45 cognitive actions. Applied Contrastive Activation Addition (CAA) steering to Gemma-3-4B on 1,000 BigToM scenarios, finding improved belief attribution (32.5% to 46.7% accuracy) is mediated by emotional processing: emotion perception (+2.23), emotion valuing (+2.20), while suppressing analytical processes: questioning (-0.78), convergent thinking (-1.59).",
      githubUrl: "https://github.com/ChuloIva/Cogni_map",
      paperUrl: "https://arxiv.org/abs/2511.15895"
    },
    {
      title: "Digital Shadows of Mental States: Exploring the Behaviour of Large Language Models with Representation Engineering",
      description: "Investigates how representation engineering techniques can model psychological states in LLMs. Fine-tuned Mistral-7B on depression-related datasets, then applied representation engineering to implement intervention vectors based on self-determination theory. Compared intrinsic motivations (personal growth, community feeling) versus extrinsic motivations (wealth, status, appearance) as psychological interventions. Key finding: intrinsic goal interventions showed greater positive trends on the model's reported mood, with community engagement ranking among the highest-performing interventions.",
      githubUrl: "https://github.com/ChuloIva/Representation-engineering---mental-health-experiments",
      paperUrl: "https://dabar.srce.hr/islandora/object/ffzg:13822"
    }
  ];

  const devProjects = [
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
    { icon: Twitter, href: "https://twitter.com/koalacrown", label: "@koalacrown" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=PIiQ5rQAAAAJ&hl=en", label: "Google Scholar" },
    { icon: BookOpen, href: "https://parislo.substack.com/", label: "Substack" }
  ];

  return (
    <div className="min-h-screen bg-background font-roboto">
      <TableOfContents />
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
        <section id="about-me" className="mb-16 animate-fade-in">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">About Me</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Hey, I'm Ivan. I'm a cognitive scientist and AI researcher based in Zagreb, Croatia, with an MA in Applied Cognitive Science. My work centers on figuring out how AI systems "think"—especially when it comes to psychology, mental health, and making these models actually useful for people.
                </p>
                <p>
                  Most of my research sits at the intersection of machine learning and cognitive science, using mechanistic interpretability to explore model internals. I've investigated how models respond to psychological interventions based on self-determination theory, exploring whether they follow the same patterns as humans. In another project, I decomposed Theory of Mind abilities and analyzed what processing happens underneath using linear probes trained on model activations. This work was <a href="https://aaai.org/conference/aaai/aaai-26/workshop-program-list/#ws07" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline">presented at AAAI</a>.
                </p>
                <p>
                  On the applied side, I build things: therapeutic AI systems that analyze therapy sessions in real-time, adapted SAEs for discovering cognitive markers of depression, and multi-agent systems for psychological assessment. I also enjoy weirder side projects—like a Bluesky bot that simulates polarized political debates, or automated Twitter bots that tap into trending topics.
                </p>
                <p>
                  Day-to-day, I work across the full stack—fine-tuning models, prompt engineering, evaluation pipelines, LangChain/CrewAI agent architectures, and data visualization. I'm deeply interested in AI safety and alignment, so red teaming, evaluation methodologies, and understanding what's happening under the hood are all things I like to occupy my mental space with.
                </p>
                <p>
                  I'm a research student affiliate at the <a href="https://pals-research-lab.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline">PALS lab</a> at Johns Hopkins University.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Published Research Section */}
        <section id="published-research" className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Published Research</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedResearch.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group animate-scale-in">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
                    >
                      View on GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={item.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
                    >
                      Read Paper
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Projects Section */}
        <section id="research-projects" className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Research Projects</h3>
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

        {/* Dev Projects Grid */}
        <section id="dev-projects" className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Dev Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devProjects.map((project, index) => (
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
        <section id="skills" className="mb-16 animate-fade-in">
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
        <section id="certifications" className="mb-16 animate-fade-in">
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
        <div id="education-experience" className="grid gap-6 md:grid-cols-2 mb-16 animate-fade-in">
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
