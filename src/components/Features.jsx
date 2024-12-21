import { FaBook, FaComments, FaHandshake, FaStar } from 'react-icons/fa';

function Features() {
  return (
    <div id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Why Choose BookNest?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="text-secondary text-4xl mb-4 flex justify-center">
              <FaBook />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vast Collection</h3>
            <p className="text-gray-600">Access thousands of books across all genres</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-secondary text-4xl mb-4 flex justify-center">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Exchange</h3>
            <p className="text-gray-600">Simple and secure book trading system</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-secondary text-4xl mb-4 flex justify-center">
              <FaComments />
            </div>
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-gray-600">Connect with fellow book lovers</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-secondary text-4xl mb-4 flex justify-center">
              <FaStar />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Reviews</h3>
            <p className="text-gray-600">Honest feedback from real readers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;