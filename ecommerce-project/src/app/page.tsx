import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white w-full pb-6    sm:pb-8 lg:pb-12">
      <Hero />
     <Newest/>
    
      </div>

    </div>
  );
}
