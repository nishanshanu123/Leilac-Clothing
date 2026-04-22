import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowToOrder from "@/components/HowToOrder";
import StoreDetails from "@/components/StoreDetails";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <FeaturedProducts />
      <HowToOrder />
      <StoreDetails />
    </>
  );
}