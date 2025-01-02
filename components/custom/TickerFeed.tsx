'use client'
import Ticker from 'framer-motion-ticker';
import Image from 'next/image';
import { FC } from 'react';

const TickerFeed: FC = () => {
  const content: (string | { src: string; alt: string })[] = [
    'Our Services',
    'VAT Registration',
    'Corporate Tax Registration',
    'Company Liquidation',
    'Tax Number Cancellation',
    'Settlement of Tax Penalties',
    'Submitting Tax Declarations',
    'Approved Financial Reports',
    'Home Tax Refund',
    'Court Announcements',
    'Economic Department',
    { src: require('../../assets/logos/1.png'), alt: 'Service Image 1' },
    { src: require('../../assets/logos/2.png'), alt: 'Service Image 2' },
    'تسجيل ضريبة القيمة المضافة',
    'تسجيل الضريبة على الشركات',
    'تصفية الشركة',
    'إلغاء الرقم الضريبي',
    'تسوية الغرامات الضريبية',
    'تقديم الإقرارات الضريبية',
    'التقارير المالية المعتمدة للجهات المختلفة',
    'استرداد ضريبة القيمة المضافة للمساكن',
    'إعلانات المحاكم',
    'إعلانات دائرة الاقتصاد',
    ':خدماتنا',
  ];

  return (
    <div className="bg-[#fffbeb]" style={{ direction: 'ltr' }}>
      <Ticker duration={30}>
        {content.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-center text-[#d69509] m-3"
            style={{ height: '62px', width: '230px', fontSize: '1em' }}
          >
            {typeof item === 'string' ? (
              <p>{item}</p>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={230}
                height={85}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            )}
          </div>
        ))}
      </Ticker>
    </div>
  );
};

export default TickerFeed;

