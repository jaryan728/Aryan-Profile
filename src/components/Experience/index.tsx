import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import Link from 'next/link';
import { Button } from '../../styles/styles';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Title } from '../../styles/styles';
import { ExperienceContainer, ExperienceContent } from './styles';
import { Briefcase } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import experience from '../../data/experiences';

export function Experience() {
  const theme = useTheme();
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en');
  }, [router.locale]);

  return (
    <Container>
      <Title>
        {'Experience'}
        <span>
          <Briefcase /> {'Internship'}
        </span>
      </Title>

      <div id="experience">
        <VerticalTimeline lineColor={theme.firstColor}>
          {experience &&
            experience.map(exp => {
              const description = exp.description[currentLang];
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme.backgroundAlt,
                    borderBottom: `7px solid ${theme.backgroundAlt}`,
                    boxShadow: `0px 5px 0px 0px ${theme.firstColor}`
                  }}
                  contentArrowStyle={{
                    borderRight: `10px solid ${theme.backgroundAlt}`
                  }}
                  date={exp.date}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={exp.img}
                      alt={exp.title.en} 
                      loading="lazy"
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={exp.id}
                >
                  <ExperienceContainer>
                    <ExperienceContent>
                      <h1>{exp.title[currentLang]}</h1>
                      <h2>{exp.subTitle[currentLang]}</h2>
                      <p>{description ? description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      )) : t('description_not_available')}</p>
                     
                     <div>
  <h3 style={{ marginBottom: '0.5rem' }}>{'Tech Stack'}</h3>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '0.5rem'
  }}>
    {exp.tags.map(tag => (
      <div
        key={tag.name}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: theme.background,
          border: `1px solid ${theme.firstColor}`,
          borderRadius: '1.5rem',
          padding: '0.4rem 0.8rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <Image
          src={tag.icon}
          alt={tag.name}
          width={20}
          height={20}
        />
        <span style={{ fontSize: '0.9rem' }}>{tag.name}</span>
      </div>
    ))}
  </div>
</div>

                    </ExperienceContent>
                  </ExperienceContainer>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </div>
    </Container>
  );
}
