import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FooterMain : React.FC = () => {
  return (
    <footer className="py-6 px-6 md:px-12 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <Link to="/">Alquimio</Link>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-4 text-sm ">
          <Button className="text-emerald-600 hover:text-amber-500" variant="link" asChild>
            <Link to="/about">Nosotros</Link>
          </Button>
          <Button className="text-emerald-600 hover:text-amber-500" variant="link" asChild>
            <Link to="/help">Ayuda</Link>
          </Button>
          <Button className="text-emerald-600 hover:text-amber-500" variant="link" asChild>
            <Link to="/contact">Contáctanos</Link>
          </Button>
        </nav>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button className="hover:text-amber-500" variant="outline" size="icon" asChild>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="w-5 h-5" />
            </a>
          </Button>
          <Button className="hover:text-amber-500" variant="outline" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="w-5 h-5" />
            </a>
          </Button>
          <Button className="hover:text-amber-500" variant="outline" size="icon" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      <Separator className="my-4 bg-gray-700" />
      <div className="text-center text-xs">
        &copy; {new Date().getFullYear()} Alquimio. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default FooterMain