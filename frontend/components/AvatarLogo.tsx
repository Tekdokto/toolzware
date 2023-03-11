import Image from 'next/image';

const AvatarLogo = ({ imageUrl, altText }) => {
  return (
    <div className="rounded-full avatar-border border-gray-300 p-1">
      {/* <Image src={imageUrl} alt={altText} width={48} height={48} className="rounded-full" /> */}
      <img src={imageUrl} alt={altText} width={35} height={35} className="rounded-full" />
    </div>
  );
};

export default AvatarLogo;
