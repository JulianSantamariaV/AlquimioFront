import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FooterMain: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6 md:px-12 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-3xl font-extrabold text-emerald-500 hover:text-amber-500 transition-colors">
          <Link to="/">Alquimio</Link>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Button className="text-gray-300 hover:text-amber-500 transition-colors" variant="link" asChild>
            <Link to="/about">Nosotros</Link>
          </Button>
          <Button className="text-gray-300 hover:text-amber-500 transition-colors" variant="link" asChild>
            <Link to="/help">Ayuda</Link>
          </Button>
          <Button className="text-gray-300 hover:text-amber-500 transition-colors" variant="link" asChild>
            <Link to="/contact">Contáctanos</Link>
          </Button>
        </nav>

        <div className="flex space-x-4">
          <Button className="bg-gray-800 hover:bg-amber-500 transition-colors p-2 rounded-full" size="icon" asChild>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="w-5 h-5 text-gray-300" />
            </a>
          </Button>
          <Button className="bg-gray-800 hover:bg-amber-500 transition-colors p-2 rounded-full" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="w-5 h-5 text-gray-300" />
            </a>
          </Button>
          <Button className="bg-gray-800 hover:bg-amber-500 transition-colors p-2 rounded-full" size="icon" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-5 h-5 text-gray-300" />
            </a>
          </Button>
        </div>
      </div>

      <Separator className="my-6 bg-gray-700" />
      <div className="text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Alquimio. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default FooterMain;
