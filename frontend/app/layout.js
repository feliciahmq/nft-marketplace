import '../styles/globals.css';
import { NavBar } from '@/components/componentIndex';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
