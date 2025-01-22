import BlackFridayBanner from "@/components/BlackFridayBanner";
import Footer from "@/components/footer";
import Footerend from "@/components/footerend";
import Header from "@/components/header";
import ProductsView from "@/components/ProductsView";
import Topnav from "@/components/topnav";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default  async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();


  return (
    <><div>
        <Topnav/>
        <Header/>
      {/* Banner Section */}
      <div
        className="w-[390px] relative h-[146px] md:h-[209px] md:w-full bg-cover bg-center flex items-center container mx-auto"
        style={{ backgroundImage: `url('All Products.png')` }}
      >
        <h1 className="relative z-10 text-white text-4xl font-normal pl-20 pt-10 md:pt-20">All products</h1>
      </div>
      <div >
      <BlackFridayBanner/>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
      <Footer/>
      <Footerend/>
      </div>
      </>
      
    
  );
}
