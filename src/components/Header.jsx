import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Jarurat Care</h1>
    <nav>
      <Link className="mx-2" to="/">Home</Link>
      <Link className="mx-2" to="/patients">Patients</Link>
      <Link className="mx-2" to="/about">About</Link>
    </nav>
  </header>
);
