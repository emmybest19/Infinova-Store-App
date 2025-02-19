import HeroSection from "../components/HeroSection";
import FlashSalesCard from "../components/FlashSalesCard";
import New from "../components/New/New";
import SupperDeals from "../components/SupperDeals/SupperDeals";
import Bestselling from "../components/BestSelling/Bestselling";


function Home() {
    return (
        <div className="dark:bg-real transition-all">
           
            <HeroSection />
            <FlashSalesCard />
            <New />
            <SupperDeals />
            <Bestselling />
            
        </div>
    );
}

export default Home;