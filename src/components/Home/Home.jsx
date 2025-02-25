import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 transition-all duration-300 hover:text-blue-600 hover:scale-105">
            Welcome to Auth Master
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Secure Authentication Made Simple
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Secure Login
              </h3>
              <p className="text-slate-600">
                State-of-the-art security protocols
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Fast & Reliable
              </h3>
              <p className="text-slate-600">
                Lightning-fast authentication
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Protected
              </h3>
              <p className="text-slate-600">
                Your data is always safe
              </p>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
              <Link to='/register' >Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;