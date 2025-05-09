import Image from 'next/image'
import { useTheme } from 'styled-components'
import education from '../../data/education'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Container, Title } from '../../styles/styles'
import { EducationContainer, EducationContent } from './styles'
import { Books } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export interface EducationProps {
  target: HTMLInputElement
}

export function Education() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en');
  }, [router.locale]);

  const handleChange = (e: EducationProps) => {
    setQuery(e.target.value);
  };

  const theme = useTheme()

  return (
    <Container>
      <Title>
        {'History'}
        <span>
          <Books /> {'Academic'}
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {education &&
            education.map(education => {
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
                  date={education.date.en}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={education.img}
                      alt={education.title.en}
                      loading="lazy"
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={education.id}
                >
                  <EducationContainer>
                    <EducationContent>
                      <h1>{education.title.en}</h1>
                      <h2>{education.subTitle.en}</h2>
                      <p>{education.description.en.split('\n').map((line, i) => (
                        <a key={i}>
                          {line}
                          <br />
                        </a>
                      ))}</p>
                    </EducationContent>
                  </EducationContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}
