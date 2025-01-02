// import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import wallpaper from '../assets/imgs/golden_wallpaper.jpg';
import TickerFeed from '@/components/custom/TickerFeed';

export default function Home() {
  // const { t } = useTranslation();

  return (
    <>
                  <div className="relative bg-cover bg-center h-[23em]">
                {/* Background image with blur effect and animation */}
                <div className="absolute inset-0 bg-cover bg-center h-full">
                    <Image src={wallpaper} alt="background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>

                {/* Centered content */}
                <div className="relative flex items-center justify-center h-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="text-center">
                        <h2 className="mb-6 font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#f4ebdc] sm:leading-none">
                            {/* {t('title')} */}
                        </h2>
                        <p className="mb-6 text-base text-[#d7d0c2] md:text-l">
                            {/* {t('subtitle')} */}

                        </p>
                    </div>
                </div>
            </div>
            <TickerFeed />


            {/* list of services */}
    </>
  );
}
