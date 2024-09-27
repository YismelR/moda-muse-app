import SocialMedia from './SocialMedia';
import Logo from '../navigation-bar/Logo';
import ContactUs from './ContactUs';

export default function FooterSection() {
  return (
    <footer className="shadow-2xl px-8 h-96 py-8 border-t-2">
      <div>
      <Logo />
      <SocialMedia />
      </div>
      <div>
        <ContactUs/>
      </div>
    </footer>
  );
}
