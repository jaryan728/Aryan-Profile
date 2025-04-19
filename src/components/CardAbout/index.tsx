import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={100}
            className="AboutImg"
            src="/Professional_edited.jpg"
            alt="Aryan's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent" id="ac">
          <div className="aboutDescription">
  <h2>About Me</h2>
  <p>
    I’m an enthusiastic and driven B.Tech Computer Science student with a passion for creating innovative, user-centric software solutions.
  </p>
  <p>
    My experience spans full-stack development, artificial intelligence, and automation, where I’ve consistently delivered impactful projects by combining strong technical skills with a problem-solving mindset.
  </p>
  <p>
    I thrive in collaborative environments and am always eager to take on challenges that push me to grow. I’m currently seeking opportunities to contribute to forward-thinking teams and work on projects that make a real difference.
  </p>
</div>


         
        </div>
      </AboutContainer>
    </Container>
  );
}
