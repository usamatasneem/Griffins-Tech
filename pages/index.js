import Head from "next/head";
import BlogContent from "../components/DefaultHome/BlogContent";
import CallToAction from "../components/DefaultHome/CallToAction";
// import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
// import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import Hero from "../components/Hero/Hero";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import FeaturesOne from "../components/Features/FeaturesOne";
import Testimonial from "../components/Testimonial/Testimonial";
import FaqContent from "../components/Faq/FaqContent";
import FeaturesFour from "../components/Features/FeaturesFour";
import HeroThree from "../components/Hero/HeroThree";
import ContentBlockOne from "../components/HomeThree/ContentBlockOne";
import ContentBlockThree from "../components/HomeThree/ContentBlockThree";
import ContentBlockTwo from "../components/HomeThree/ContentBlockTwo";
import Cta from "../components/HomeThree/Cta";
import PricingContentTwo from "../components/Pricing/PricingContentTwo";
import TestimonialTwo from "../components/Testimonial/TestimonialTwo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Griffins Tech</title>
      </Head>
      {/* <Hero />
      <FeaturesOne />
      <ContentBlockOne />
      <PopularCryptoCurrencies />
      <ContentBlockTwo />
      <Testimonial />
      <FaqWithVideoModal />
      <BlogContent />
      <CallToAction /> */}
      <HeroThree />
      <FeaturesFour />
      <Cta />
      <ContentBlockOne />
      <ContentBlockTwo />
      <ContentBlockThree />
      <PricingContentTwo />
      <TestimonialTwo />
      <FaqContent />
    </>
  );
}
