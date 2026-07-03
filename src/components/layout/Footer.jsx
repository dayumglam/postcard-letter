import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { navigation } from '../../data/content';
import { Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 rounded-t-[3rem] mt-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl mb-4 text-white">Have a question?</h3>
              <p className="text-white/60 mb-8 max-w-sm">
                If there's anything you'd like to ask or clarify, we're here to listen.
              </p>
            </div>
            <Button variant="secondary" className="self-start">
              Contact us &rarr;
            </Button>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Postcard.co — words that wait.</h3>
              <p className="text-white/60">
                A quiet way to send meaningful messages, opened only at the right moment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
             <span className="text-white/60 text-sm">© 2024 Postcard.co. Made with care.</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
            
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="hover:text-white transition-colors">ToC</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
