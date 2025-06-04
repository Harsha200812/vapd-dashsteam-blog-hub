
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BlogTitle } from "@/components/BlogTitle";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { RecentPosts } from "@/components/RecentPosts";
import { Services } from "@/components/Services";
import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BlogTitle />
      <FeaturedPosts />
      <RecentPosts />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
