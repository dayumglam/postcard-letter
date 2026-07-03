import { navigation } from '../../data/content';
import { UserCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50">
      <div 
        className="bg-[#3f3f46] text-[#d4d4d8] rounded-full pl-2 pr-6 py-2 flex items-center gap-4 shadow-xl"
      >
        {/* User Icon Button */}
        <button 
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b from-white via-[#8c8c8d] to-[#18181b]"
        >
          <UserCircle className="w-5 h-5 text-white" strokeWidth={2} />
        </button>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="px-2 py-1 hover:text-white transition-colors font-medium text-lg"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
