import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
   title: "Home - Mentalis",
};

export default function Home() {
   return (
      <div>
         <NavBar />
         <h2>Home</h2>
         <Footer />
      </div>
   );
}
