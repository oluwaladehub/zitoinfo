import { Facebook, Twitter, Instagram, Phone, } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2024 Zitech. All Rights Reserved.</p>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/SirZito?mibextid=LQQJ4d" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com/AdesanluZito" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="http://wa.me/2348072820589" className="hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}