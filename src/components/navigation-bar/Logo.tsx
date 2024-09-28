import logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="h-10 md:h-16 lg:h-20" />
    </Link>
  );
}
