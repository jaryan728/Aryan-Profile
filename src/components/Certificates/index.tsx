/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image'
import Link from 'next/link'
import certificates from '../../data/certificates'
import certificate_img from '../../data/certificate_img'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Certificates() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <S.ContainerEducation>
      <Title>
        {currentLang === 'ta' ? 'முக்கிய நிகழ்வுகள்' : 'Highlights'}
        <span>
          <GraduationCap /> {currentLang === 'ta' ? 'சான்றிதழ்' : 'Certification'}
        </span>
      </Title>
      <S.EducationContent>
       

        <S.EducationImage>
          <img
            className="education-logo"
            src="/education/education.svg"
            alt={currentLang === 'ta' ? 'கணினியில் சிறுவன்' : 'boy on computer'}
          />

          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
          >
            {certificate_img &&
              certificate_img.map(certificate_img => {
                return (
                  <Image
                    width={500}
                    height={300}
                    className="carousel"
                    src={certificate_img.image}
                    alt="my certificate"
                    loading="lazy"
                  />
                )
              })}
          </Carousel>
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  );
}