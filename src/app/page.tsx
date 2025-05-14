import Navbar from "@/app/[route]/Navbar";
import Blog from "@/components/form/Blog";
import LandingPage from "@/components/form/LandingPage";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <div className="w-[1200px] flex-row gap-4 items-center justify-center">
      <Blog/>
    </div>
  );
}
