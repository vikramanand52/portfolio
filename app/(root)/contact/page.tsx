import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="max-w-xl mx-auto py-16 px-8 sm:px-12 relative overflow-hidden bg-muted/30 rounded-3xl border border-border/40 my-8 shadow-sm">
        {/* Ambient mesh backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-primary/5 rounded-full blur-[90px] pointer-events-none -z-20 animate-pulse-slow" />
        
        <ContactForm />
      </div>
    </PageContainer>
  );
}
