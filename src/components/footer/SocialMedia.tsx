import twitter from '@/assets/twitter.svg';
import instagram from '@/assets/instagram.svg';
import youtube from '@/assets/youtube.svg';
import linkedin from '@/assets/linkedin.svg';
export default function SocialMedia() {
  return (
    <div className="flex size-2 w-16 lg:size-4 gap-3 lg:w-32 justify-center mt-4">
      <img src={twitter} alt="twitter" />
      <img src={instagram} alt="instagram" />
      <img src={youtube} alt="youtube" />
      <img src={linkedin} alt="linkedIn" />
    </div>
  );
}
