import Logo from './Logo';
import NavButtons from './NavButtons';
export default function NavBar() {
  return (
    <header className="px-8 py-4 flex justify-between place-items-center shadow-md">
      <Logo />
      <NavButtons />
    </header>
  );
}
