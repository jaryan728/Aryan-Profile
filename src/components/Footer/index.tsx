import Link from 'next/link';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterContainer, FooterContent } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <h4> &copy; {new Date().getFullYear()} Aryan Jain</h4>

      </FooterContent>
  
    </FooterContainer>
  );
}