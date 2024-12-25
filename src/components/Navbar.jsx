import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // Store the current user
  const auth = getAuth();
  const navigate = useNavigate();

  // Check for user authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup listener on unmount
  }, [auth]);

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
      navigate("/"); // Redirect to home page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

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
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <Link to="/marketplace" className="hover:text-secondary">Marketplace</Link>
            <Link to="/community" className="hover:text-secondary">Community</Link>
            <Link to="/contact" className="hover:text-secondary">Contact</Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="hover:text-secondary">Login</Link>
                <Link to="/signup" className="hover:text-secondary">Signup</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-secondary">Home</Link>
            <Link to="/marketplace" className="block hover:text-secondary">Marketplace</Link>
            <Link to="/community" className="block hover:text-secondary">Community</Link>
            <Link to="/contact" className="block hover:text-secondary">Contact</Link>
            {user ? (
              <>
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mx-auto border-2 border-white"
                />
                <button
                  onClick={handleLogout}
                  className="block bg-red-500 text-white px-4 py-2 rounded-lg mx-auto hover:bg-red-600 focus:outline-none"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block hover:text-secondary">Login</Link>
                <Link to="/signup" className="block hover:text-secondary">Signup</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
