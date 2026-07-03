import { navigation } from '../../data/content';

export function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#27272a] text-white rounded-full px-6 py-2 flex items-center gap-6 shadow-lg text-sm">
        <ul className="flex items-center gap-5">
          {navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="hover:text-gray-300 transition-colors font-medium"
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
