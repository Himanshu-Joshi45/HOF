import { GraduationCap, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onLogoClick?: () => void;
}

export function Navbar({ onLogoClick }: NavbarProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
    if (onLogoClick) {
      onLogoClick();
    }
  };

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-black" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              Poornima College of {' '}
              <span className="text-amber-500">Engineering</span>
            </span>
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavigate('/hall-of-fame')}
              className="text-zinc-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              Hall of Fame
            </button>

            <button
              onClick={() => window.location.href = 'mailto:info@poornima.org'}
              className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">info@poornima.org</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
