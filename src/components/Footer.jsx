import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BookNest</h3>
            <p className="text-sm">Your ultimate destination for book lovers, traders, and community.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#marketplace" className="hover:text-secondary">Marketplace</a></li>
              <li><a href="#community" className="hover:text-secondary">Community</a></li>
              <li><a href="#features" className="hover:text-secondary">Features</a></li>
              <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@booknest.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-secondary"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-secondary"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-secondary"><FaEnvelope size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; 2024 BookNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;