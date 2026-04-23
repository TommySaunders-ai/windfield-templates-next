import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SubnavBanner } from "@/components/sections/subnav-banner";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { Hero } from "@/components/sections/hero";
import { LogoBar } from "@/components/sections/logo-bar";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { BlogGrid } from "@/components/sections/blog-grid";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

function SubnavIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar
        logo="Logo"
        links={[
          { label: "Home v1", href: "#" },
          { label: "Home v2", href: "#" },
          { label: "Home v3", href: "#", active: true },
          { label: "About", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Blog Post", href: "#" },
          { label: "Portfolio", href: "#" },
          { label: "Product", href: "#" },
        ]}
        phone="Call us 1 888 123 456"
        cta={{ label: "Book a consultation", href: "#" }}
      />

      <SubnavBanner
        items={[
          {
            icon: <SubnavIcon />,
            title: "Page One",
            description: "Lorem ipsum dolor sit amet consectetur elit",
          },
          {
            icon: <SubnavIcon />,
            title: "Page Two",
            description: "Lorem ipsum dolor sit amet consectetur elit",
          },
          {
            icon: <SubnavIcon />,
            title: "Page Three",
            description: "Lorem ipsum dolor sit amet consectetur elit",
          },
          {
            icon: <SubnavIcon />,
            title: "Page Four",
            description: "Lorem ipsum dolor sit amet consectetur elit",
          },
        ]}
      />

      <AnnouncementBar
        text="Looking for a new career?"
        linkText="Get in touch"
        linkHref="#"
      />

      <Hero
        title="Describe what your company does in a few words"
        description="Describe exactly what the company does and for whom, how it's different, and why someone should engage. This copy should not be longer than a few sentences, and is a preview of what's to come on the rest of the page."
        cta={{ label: "Book a consultation", href: "#" }}
      />

      <LogoBar
        title="We've worked with great companies [Social proof to build credibility]"
        logos={[
          { name: "Webflow" },
          { name: "Relume" },
          { name: "Webflow" },
          { name: "Relume" },
          { name: "Webflow" },
          { name: "Relume" },
          { name: "Webflow" },
          { name: "Relume" },
          { name: "Webflow" },
          { name: "Relume" },
          { name: "Webflow" },
          { name: "Relume" },
        ]}
      />

      <AboutSection
        kicker="About"
        heading="Describe what makes your company different to competitors"
        body="Elaborate on the unique value proposition of the company and what makes it different from the competition. Aim to communicate the company's core values and its commitment to delivering something unique in the market."
        bullets={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        ]}
        buttonLabel="Learn more"
        buttonHref="#"
      />

      <ServicesSection
        kicker="Services"
        heading="Short headline of how the company can help"
        body="Elaborate on what the company does and how it helps clients or customers. This should give a broad overview of the services without going into too much detail."
        cta={{ label: "Book a consultation", href: "#" }}
        services={[
          {
            title: "Summary of service one",
            description:
              "Provide a brief description of the service and how it benefits the customer. Mention key features, unique advantages, and any results the customer can expect.",
            href: "#",
          },
          {
            title: "Summary of service two",
            description:
              "Provide a brief description of the service and how it benefits the customer. Mention key features, unique advantages, and any results the customer can expect.",
            href: "#",
          },
          {
            title: "Summary of service three",
            description:
              "Provide a brief description of the service and how it benefits the customer. Mention key features, unique advantages, and any results the customer can expect.",
            href: "#",
          },
          {
            title: "Summary of service four",
            description:
              "Provide a brief description of the service and how it benefits the customer. Mention key features, unique advantages, and any results the customer can expect.",
            href: "#",
          },
        ]}
      />

      <TestimonialSection
        kicker="Customer Stories"
        heading="Don't just take our word for it"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        authorName="Name Surname"
        authorPosition="Position, Company name"
        brandName="Webflow"
      />

      <BlogGrid
        kicker="Resources"
        heading="Introduce resources that can provide value to the visitor"
        body="Describe the types of resources you have available and the value they provide to your audience."
        cards={[
          {
            category: "Category",
            title: "Blog title heading will go here",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            author: "Author Name",
            date: "11 Jan 2022",
            readTime: "5 min read",
          },
          {
            category: "Category",
            title: "Blog title heading will go here",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            author: "Author Name",
            date: "11 Jan 2022",
            readTime: "5 min read",
          },
          {
            category: "Category",
            title: "Blog title heading will go here",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            author: "Author Name",
            date: "11 Jan 2022",
            readTime: "5 min read",
          },
          {
            category: "Category",
            title: "Blog title heading will go here",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            author: "Author Name",
            date: "11 Jan 2022",
            readTime: "5 min read",
          },
        ]}
        viewAllHref="#"
      />

      <FAQSection
        heading="Frequently asked questions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        items={[
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
          "Question text goes here",
        ]}
      />

      <CTASection
        heading="Still have a questions?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        buttonLabel="Call us 1 888 123 456"
        buttonHref="tel:1888123456"
      />

      <Footer
        logo="Logo"
        newsletterText="Subscribe to our newsletter for the latest updates and insights."
        disclaimer="By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company."
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Services", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Help Center", href: "#" },
              { label: "Documentation", href: "#" },
              { label: "Guides", href: "#" },
              { label: "API Reference", href: "#" },
              { label: "Community", href: "#" },
            ],
          },
        ]}
        socials={[
          { label: "Facebook", href: "#" },
          { label: "Instagram", href: "#" },
          { label: "X (Twitter)", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "YouTube", href: "#" },
        ]}
      />
    </>
  );
}
