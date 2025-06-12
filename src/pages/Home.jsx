import HeroSection from "../components/HeroSection";
import FlashSalesCard from "../components/FlashSalesCard";
import New from "../components/New/New";
import SupperDeals from "../components/SupperDeals/SupperDeals";
import Bestselling from "../components/BestSelling/Bestselling";


function Home({mainPosts}) {
    return (
        <div className="dark:bg-real transition-all">
           
            <HeroSection />
            <FlashSalesCard  mainPosts={mainPosts} />
            <New />
            <SupperDeals />
            <Bestselling />
            
        </div>
    );
}

export default Home;