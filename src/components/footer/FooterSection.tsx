import SocialMedia from './SocialMedia';
import Logo from '../navigation-bar/Logo';
import ContactUs from './ContactUs';
import Shop from './Shop';
import Explore from './Explore';

export default function FooterSection() {
  return (
    <footer className=" grid grid-cols-4 shadow-2xl px-8 h-96 py-8 border-t-2 mt-auto">
      <div>
        <Logo />
        <SocialMedia />
      </div>
      <Shop />
      <ContactUs />
      <Explore />
    </footer>
  );
}
