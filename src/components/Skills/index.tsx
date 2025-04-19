/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import cardSkills from '../../data/skills'
import { Container, Title } from '../../styles/styles'
import { SkillsContainer, Vector } from './styles'
import { BsCodeSquare } from 'react-icons/bs'
import styled from 'styled-components'
import React from 'react'

const SkillsContent = styled.div<{ color?: string }>`
  background-color: rgba(255, 255, 255, 0.05); // subtle transparent white
  backdrop-filter: blur(8px); // frosted glass effect
  padding: 1.2rem;
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  will-change: transform, box-shadow;

  &:hover {
    transform: scale(1.05); // Slight zoom effect on hover
    box-shadow: 0 0 20px ${({ color }) => color || '#0ff'}, 0 0 10px ${({ color }) => color || '#0ff'}; // Glowing effect
    background-color: rgba(255, 255, 255, 0.1); // Slight color change on hover
  }

  h4 {
    margin-top: 0.6rem;
    font-size: 1rem;
    color: #fff;
    transition: color 0.3s ease;
  }

  .border {
    margin-top: 0.4rem;
    display: block;
    height: 2px;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    background: ${({ color }) => color || '#0ff'};
    opacity: 0.5;
    border-radius: 10px;
    transition: width 0.3s ease, opacity 0.3s ease;
  }

  &:hover .border {
    width: 60%; // Expand the border width on hover
    opacity: 1; // Full opacity on hover for the border
  }
`

export function Skills() {
  return (
    <Container>
      <Vector>
        <div className='js'>
          <Image width={100} height={100} src="/vectors/js.svg" alt="" loading="lazy" />
        </div>
        <div className='html'>
          <Image width={85} height={85} src="/vectors/html.svg" alt="" loading="lazy" />
        </div>
      </Vector>
      <Title>
        Skills <span><BsCodeSquare /> Top</span>
      </Title>
      <SkillsContainer>
        {cardSkills.map(skill => (
          <SkillsContent color={skill.color} key={skill.id}>
            <Image
              width={80}
              height={80}
              src={skill.img}
              alt={skill.title.en}
              loading='lazy'
            />
            <h4>{skill.title.en}</h4>
            <span className='border'></span>
          </SkillsContent>
        ))}
      </SkillsContainer>
    </Container>
  )
}
