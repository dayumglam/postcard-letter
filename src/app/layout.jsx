import './globals.css';

export const metadata = {
  title: 'Postcard — Send a message that arrives at the right moment',
  description: 'Write a postcard, set a time, and let it arrive naturally. Every message is intentional, timed, meaningful, and private.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
