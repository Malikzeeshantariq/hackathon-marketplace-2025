import Email from "@/components/email";
import Featureblock from "@/components/featureblock";
import Footer from "@/components/footer";
import Footerend from "@/components/footerend";
import Getintouch from "@/components/getintouch";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Listings from "@/components/listings";
import Popularproducts from "@/components/popularproducts";
import Topnav from "@/components/topnav";

export default function Home() {
  return (
   <div>
          <Topnav/>
          <Header/>
          <Hero/>
          <Featureblock/>
          <Listings/>
          <Popularproducts/>
          <Email/>
          <Getintouch/>
          <Footer/>
          <Footerend/>
   </div>
  );
}
