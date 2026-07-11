import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { GitFork, CheckSquare, Globe, MapPin } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Frontend Developer`,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.iconIco,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Frontend Developer",
    sameAs: [siteConfig.links.github],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="relative overflow-hidden border-b border-border/60">
        {/* Ambient mesh background glows */}
        <div className="absolute top-1/2 left-1/4 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[110px] pointer-events-none -z-20 animate-pulse-slow" />
        <div className="absolute top-1/3 left-2/3 w-[22rem] h-[22rem] bg-accent-2/10 rounded-full blur-[90px] pointer-events-none -z-20 animate-pulse-slow" style={{ animationDelay: "-3s" }} />

        <div
          className="bg-dot-grid absolute inset-0 -z-10 opacity-70"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        <div className="container grid gap-14 pt-8 pb-20 md:pt-12 md:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pt-14 lg:pb-32">
          <div className="flex flex-col items-start gap-6 text-left">
            <AnimatedText
              as="h1"
              delay={0.2}
              className="font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-foreground via-foreground/95 to-muted-foreground bg-clip-text text-transparent"
            >
              Vikram Anand
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.3}
              className="max-w-[38rem] text-lg leading-relaxed text-muted-foreground sm:text-xl font-medium"
            >
              Frontend Developer with <span className="text-foreground font-semibold">3 years of experience</span> building production <span className="text-foreground font-semibold">React.js</span> and <span className="text-foreground font-semibold">Next.js</span> applications for <span className="bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent font-extrabold">Jaguar Land Rover</span> and <span className="bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent font-extrabold">McLaren</span> at <span className="text-foreground font-semibold">Tata Technologies</span>. Comfortable owning a feature end-to-end – from component design and state management to API integration and testing – across large, multi-team codebases.
            </AnimatedText>
            <div className="flex flex-col gap-3 sm:flex-row">
              <AnimatedText delay={0.4}>
                <Link
                  href={"/resume-vikram_anand.pdf"}
                  target="_blank"
                  download
                  className={cn(buttonVariants({ size: "lg" }), "relative overflow-hidden group/btn font-semibold shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300")}
                  aria-label="Download Vikram Anand's Resume"
                >
                  <Icons.Download className="w-4 h-4 mr-2" />
                  Resume
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.5}>
                <Link
                  href={"/contact"}
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                    }),
                    "font-semibold transition-all duration-300 hover:bg-muted"
                  )}
                  aria-label="Contact Vikram Anand"
                >
                  <Icons.contact className="w-4 h-4 mr-2" /> Contact
                </Link>
              </AnimatedText>
            </div>
            <AnimatedText
              delay={0.6}
              className="grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6"
            >
              <div className="group/stat bg-card/45 backdrop-blur-sm border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:border-primary/35 hover:bg-card/75 shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-2xl font-black text-primary sm:text-3xl transition-colors group-hover/stat:text-accent-2">
                    45+
                  </span>
                  <Globe className="h-4.5 w-4.5 text-muted-foreground/60 transition-colors group-hover/stat:text-primary" />
                </div>
                <div className="text-[10px] leading-tight text-muted-foreground font-sans uppercase tracking-wider font-bold">
                  APIs Connected
                </div>
              </div>
              <div className="group/stat bg-card/45 backdrop-blur-sm border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:border-primary/35 hover:bg-card/75 shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-2xl font-black text-primary sm:text-3xl transition-colors group-hover/stat:text-accent-2">
                    12+
                  </span>
                  <CheckSquare className="h-4.5 w-4.5 text-muted-foreground/60 transition-colors group-hover/stat:text-primary" />
                </div>
                <div className="text-[10px] leading-tight text-muted-foreground font-sans uppercase tracking-wider font-bold">
                  Forms Shipped
                </div>
              </div>
              <div className="group/stat bg-card/45 backdrop-blur-sm border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:border-primary/35 hover:bg-card/75 shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-2xl font-black text-primary sm:text-3xl transition-colors group-hover/stat:text-accent-2">
                    2
                  </span>
                  <GitFork className="h-4.5 w-4.5 text-muted-foreground/60 transition-colors group-hover/stat:text-primary" />
                </div>
                <div className="text-[10px] leading-tight text-muted-foreground font-sans uppercase tracking-wider font-bold">
                  OEM Clients
                </div>
              </div>
            </AnimatedText>
          </div>
          <AnimatedText
            delay={0.35}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end group/profile"
          >
            {/* Ambient shifting gradient frame */}
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-card profile-glow-container transition-transform duration-500 premium-card-border"
              aria-hidden
            />
            {/* Photo container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.2rem] border border-border/80 bg-muted transition-transform duration-500 group-hover/profile:scale-[1.015]">
              <Image
                src={profileImg}
                alt="Vikram Anand - Frontend Developer"
                fill
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="object-cover"
                priority
              />
              {/* Floating Location Badge in top-left */}
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-border/40 bg-background/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-foreground/80 shadow-md backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-primary animate-bounce" />
                Pune, India
              </div>
            </div>
            {/* Glowing Live Status Badge floating at bottom */}
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-border/40 bg-background/95 px-5 py-2.5 font-sans text-xs font-semibold shadow-lg backdrop-blur-md transition-transform duration-300 group-hover/profile:translate-y-[-2px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-foreground/90">Available for Work</span>
            </div>
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 py-16 relative overflow-hidden bg-muted/30 rounded-3xl border border-border/40 my-12"
        id="skills"
      >
        {/* Ambient mesh backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-20" />
        <div className="mx-auto flex max-w-[58rem] flex-col items-start space-y-2 text-left">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            Expertise
          </span>
          <AnimatedText
            as="h2"
            className="font-heading text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pt-1"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              View All <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 py-16 relative overflow-hidden bg-muted/30 rounded-3xl border border-border/40 my-12"
        id="experience"
      >
        {/* Ambient mesh backdrop */}
        <div className="absolute top-1/2 left-1/4 w-[22rem] h-[22rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-20 animate-pulse-slow" />
        <div className="mx-auto flex max-w-[58rem] flex-col items-start space-y-2 text-left">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            Timeline
          </span>
          <AnimatedText
            as="h2"
            className="font-heading text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pt-1"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              View All <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-16 relative overflow-hidden bg-muted/30 rounded-3xl border border-border/40 my-12"
        id="projects"
      >
        {/* Ambient mesh backdrop */}
        <div className="absolute top-1/2 left-2/3 w-[22rem] h-[22rem] bg-accent-2/5 rounded-full blur-[100px] pointer-events-none -z-20 animate-pulse-slow" style={{ animationDelay: "-4s" }} />
        <div className="mx-auto flex max-w-[58rem] flex-col items-start space-y-2 text-left">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            Showcase
          </span>
          <AnimatedText
            as="h2"
            className="font-heading text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pt-1"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              View All <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
