import { FaSearch, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleBrowseBooksClick = () => {
    navigate('/marketplace'); 
  };

  const handleJoinCommunityClick = () => {
    navigate('/community');
  };

  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to BookNest</h1>
        <p className="text-xl mb-12">Your Ultimate Book Marketplace and Community Hub</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* Browse Books Button */}
          <button
            className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2"
            onClick={handleBrowseBooksClick}
          >
            <FaSearch /> Browse Books
          </button>

          {/* Join Community Button */}
          <button
            className="bg-white hover:bg-opacity-90 text-primary px-8 py-3 rounded-full flex items-center justify-center gap-2"
            onClick={handleJoinCommunityClick}
          >
            <FaUsers /> Join Community
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">10,000+</h3>
            <p>Active Members</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">50,000+</h3>
            <p>Books Listed</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">1,000+</h3>
            <p>Daily Exchanges</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
