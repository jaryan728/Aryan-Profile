import Link from 'next/link';
import Image from 'next/image';
import { ButtonAlt, Section } from '../../styles/styles';
import { CardContactContainer, CardContactContent } from './styles';
import { Pen, TelegramLogo, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className="ellipse">
          <Image
            width={330}
            height={410}
            src="/vectors/circles.svg"
            alt="circles"
            loading="lazy"
          />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>Let's Connect!</h2>
            <p>
              If you have questions or would just like to say hello, please contact me. I will do my best to get back to you as soon as possible!
            </p>

            {/* Contact Links Section */}
            <div id="contact" style={{ marginTop: '2rem' }}>
              <p weight="bold" >Email: <a href="mailto:your-email@example.com">jaryan728@gamil.com</a></p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <Link href="https://github.com/jaryan728" target="_blank" legacyBehavior>
                  <ButtonAlt>
                    <GithubLogo size={20} weight="bold" style={{ marginRight: '0.5rem' }} />
                    GitHub
                  </ButtonAlt>
                </Link>
                <Link href="https://linkedin.com/in/aryan-jain08" target="_blank" legacyBehavior>
                  <ButtonAlt>
                    <LinkedinLogo size={20} weight="bold" style={{ marginRight: '0.5rem' }} />
                    LinkedIn
                  </ButtonAlt>
                </Link>
                <Link href="https://twitter.com/jaryan728" target="_blank" legacyBehavior>
                  <ButtonAlt>
                    <TwitterLogo size={20} weight="bold" style={{ marginRight: '0.5rem' }} />
                    Twitter
                  </ButtonAlt>
                </Link>
              </div>
            </div>
          </div>

          <div className="contact">
            <Image
              width={480}
              height={500}
              src="/contact.svg"
              alt="contact image"
              loading="lazy"
            />
          </div>
        </CardContactContent>
      </CardContactContainer>
    </Section>
  );
}