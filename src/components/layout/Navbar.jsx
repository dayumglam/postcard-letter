import { navigation } from '../../data/content';
import { User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-[63px] left-1/2 -translate-x-1/2 z-50">
      <div 
        className="bg-[#3f3f46] text-[#d4d4d8] rounded-full pl-2 pr-4 py-2 flex items-center gap-[21px] shadow-[0px_13.073px_13.073px_0px_rgba(11,32,103,0.05),0px_1.868px_3.735px_0px_rgba(11,32,103,0.14),0px_48.673px_64.897px_0px_rgba(0,0,0,0.03)]"
      >
        {/* User Icon Button */}
        <button 
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(16.001px at 50% -133.19px, rgba(255,255,255,1) 0%, rgba(197,197,198,1) 25%, rgba(168,168,170,1) 37.5%, rgba(140,140,141,1) 50%, rgba(111,111,113,1) 62.5%, rgba(82,82,84,1) 75%, rgba(53,53,56,1) 87.5%, rgba(38,38,41,1) 93.75%, rgba(24,24,27,1) 100%)',
          }}
        >
          <User className="w-5 h-5 text-white" strokeWidth={1.5} />
        </button>

        {/* Navigation Links */}
        <ul className="flex items-center gap-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="px-2 py-1 hover:text-white transition-colors font-medium text-[20px] leading-7 tracking-[-0.5px]"
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
