import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">BookNest</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <Link to="/marketplace" className="hover:text-secondary">Marketplace</Link>
            <Link to="/community" className="hover:text-secondary">Community</Link>
            <Link to="/features" className="hover:text-secondary">Features</Link>
            <Link to="/contact" className="hover:text-secondary">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-secondary">Home</Link>
            <Link to="/marketplace" className="block hover:text-secondary">Marketplace</Link>
            <Link to="/community" className="block hover:text-secondary">Community</Link>
            <Link to="/features" className="block hover:text-secondary">Features</Link>
            <Link to="/contact" className="block hover:text-secondary">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
