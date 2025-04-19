import Link from 'next/link';
import Image from 'next/image';
import { ButtonAlt, Section } from '../../styles/styles';
import { CardContactContainer, CardContactContent } from './styles';
import { Pen, TelegramLogo, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

export function CardContact() {
  return (
    <Section>
      <CardContactContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div className="ellipse" style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            width={330}
            height={410}
            src="/vectors/circles.svg"
            alt="circles"
            loading="lazy"
            style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
          />
        </div>
        <CardContactContent style={{ textAlign: 'center', padding: '1rem', maxWidth: '600px' }}>
          <div className="description">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let's Connect!</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
              If you have questions or would just like to say hello, please contact me. I will do my best to get back to you as soon as possible!
            </p>

            {/* Contact Links Section */}
            <div id="contact" style={{ marginTop: '2rem' }}>
              <p style={{ fontWeight: 600, fontSize: '1rem' }}>
                Email: <a href="mailto:jaryan728@gmail.com">jaryan728@gmail.com</a>
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column', // Stack links on mobile
                  gap: '1rem',
                  marginTop: '1rem',
                  alignItems: 'center',
                }}
              >
                <Link href="https://github.com/jaryan728" target="_blank" legacyBehavior>
                  <ButtonAlt style={{ width: '100%', maxWidth: '200px' }}>
                    <GithubLogo size={20} weight="bold" style={{ marginRight: '0.5rem' }} />
                    GitHub
                  </ButtonAlt>
                </Link>
                <Link href="https://linkedin.com/in/aryan-jain08" target="_blank" legacyBehavior>
                  <ButtonAlt style={{ width: '100%', maxWidth: '200px' }}>
                    <LinkedinLogo size={20} weight="bold" style={{ marginRight: '0.5rem' }} />
                    LinkedIn
                  </ButtonAlt>
                </Link>
                <Link href="https://twitter.com/jaryan728" target="_blank" legacyBehavior>
                  <ButtonAlt style={{ width: '100%', maxWidth: '200px' }}>
                    <TwitterLogo size={20} weight="bold" style={{ marginRight: '0.5rem' }} />
                    Twitter
                  </ButtonAlt>
                </Link>
              </div>
            </div>
          </div>

          <div className="contact" style={{ marginTop: '2rem' }}>
            <Image
              width={480}
              height={500}
              src="/contact.svg"
              alt="contact image"
              loading="lazy"
              style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
            />
          </div>
        </CardContactContent>
      </CardContactContainer>
    </Section>
  );
}