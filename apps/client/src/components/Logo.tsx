import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../../public/logo.jpg';

export default function Logo({ dark, width = 50, height = 32 }: any) {
  return (
    <Link className="shrink-0" href="/">
      <Image
        src={logoImage}
        alt="Allocations.com"
        width={width}
        height={height}
        className="cursor-pointer"
        loading="eager"
      />
    </Link>
  );
}
