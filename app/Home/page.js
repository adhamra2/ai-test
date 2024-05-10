import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import HomePage2 from "@/pages/HomePage2";

export default function HomePage() {
  return (
    <div className="w-full max-h-[100vh] px-[2%]">
      <Header />
      <div className="flex gap-3 w-full items-center mt-[90px]">
        <SideNav />
        <HomePage2 />
      </div>
    </div>
  );
}
