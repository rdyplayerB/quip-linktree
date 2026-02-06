'use client';

import Image from 'next/image';
import { SiteConfig } from '@/types';

interface HeaderProps {
  config: SiteConfig;
}

export function Header({ config }: HeaderProps) {
  return (
    <header className="text-center mb-8 pt-8 pb-4">
      <a
        href={config.mainWebsiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-2xl"
      >
        <Image
          src="/images/quiplogo.png"
          alt="Quip Network"
          width={80}
          height={80}
          className="h-auto w-auto max-h-[80px] mx-auto drop-shadow-[0_2px_12px_rgba(0,212,255,0.15)]"
          unoptimized
        />
      </a>

      <a
        href={config.mainWebsiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-5 text-[22px] font-bold text-white hover:text-white/80 transition-colors duration-200"
      >
        quip.network
      </a>

      {config.tagline && (
        <p className="text-[15px] text-[#b4bedd] mt-1 max-w-sm mx-auto">
          {config.tagline}
        </p>
      )}
    </header>
  );
}
