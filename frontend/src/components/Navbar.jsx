import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const isRegisterPage = location.pathname === '/register';

  const navGradient = isRegisterPage
    ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600'
    : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600';

  const buttonTextColor = isRegisterPage ? 'text-teal-600' : 'text-purple-600';
  const buttonHoverBg = isRegisterPage ? 'hover:bg-teal-50' : 'hover:bg-purple-50';
  const buttonShadow = isRegisterPage ? 'shadow-teal-500/25' : 'shadow-purple-500/25';

  return (
    <nav className={`${navGradient} shadow-xl transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="flex items-center space-x-4"></div>
            <Link to="/" className="text-white font-bold text-xl tracking-tight">
              Echo
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white font-medium">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`bg-white ${buttonTextColor} ${buttonHoverBg} px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg ${buttonShadow}`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`bg-white ${buttonTextColor} ${buttonHoverBg} px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg ${buttonShadow}`}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
