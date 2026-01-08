import { GraduationCap, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onLogoClick?: () => void;
  onAddClick: () => void;
}

export function NavbarHall({ onLogoClick, onAddClick }: NavbarProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    if (onLogoClick) {
      onLogoClick();
    }
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
              Poornima College of{' '}
              <span className="text-amber-500">Engineering</span>
            </span>
          </button>

          <button
            onClick={onAddClick}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add to Hall of Fame</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
