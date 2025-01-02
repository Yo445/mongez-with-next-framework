'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { authContext } from '@/context/authContext';
import React from 'react';

interface SerCardProps {
  initialTitle: string;
  link: string;
  icon: React.ComponentType<{ fontSize: string }>; // Ensure this is a component
}

const SerCard: React.FC<SerCardProps> = ({ initialTitle, link, icon }) => {
  const { t } = useTranslation();
  const router = useRouter(); // Hook for internal navigation
  const { token } = useContext(authContext);

  // Function to handle navigation on card click
  const handleCardClick = () => {
    if (!link) return;

    // Handle route navigation
    if (token) {
      router.push(`/${link}`);
    } else {
      router.push(`/${link}`); // Navigate for unauthenticated users
    }
  };

  // Instantiate the icon with a fontSize prop
  const IconElement = React.createElement(icon, { fontSize: '60px' });

  return (
    <div
      onClick={handleCardClick}
      className="bg-[#f0f3f5] p-4 rounded-[1em] h-60 hover:bg-[#f9f1cf] duration-500"
    >
      {/* Card */}
      <div
        className="card m-auto text-black hover:brightness-90 transition-all cursor-pointer group rounded-lg overflow-hidden relative max-w-[250px] w-full h-[250px] flex flex-col justify-between"
      >
        <div className="px-8 py-10">
          {/* Icon element */}
          <div className="group-hover:-translate-y-1 transition-all mb-2">
            {IconElement}
          </div>

          {/* Static title */}
          <div className="font-bold text-[1.2em] break-words w-full">
            {initialTitle}
          </div>

          <div className="text-gray-400">
            <p className="font-bold">{t('emirates')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerCard;
