/* eslint-disable @next/next/no-img-element */
import HeroHome from "@/components/HeroHome/HeroHome";
import "./page.css";
import MainBanner from "@/components/MainBanner/MainBanner";
import DolorSolucionHome from "@/components/DolorSolucionHome/DolorSolucionHome";
import AboutHome from "@/components/AboutHome/AboutHome";
import NosotrosHome from "@/components/NosotrosHome/NosotrosHome";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function LandigPage() {
   return (
      <div>
         <MainBanner />
         <HeroHome />
         <DolorSolucionHome />
         <AboutHome />
         <NosotrosHome />
         <WhyChooseUs />
      </div>
   );
}
