import { navigation } from '../../data/content';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <div className="bg-brand-dark/90 backdrop-blur-md text-white rounded-full px-6 py-3 flex items-center gap-6 shadow-xl border border-white/10">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
        </div>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="hover:text-white/70 transition-colors"
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
