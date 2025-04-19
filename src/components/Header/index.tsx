import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 
  const handleOpen = () => {
    setOpen(!open);
  };
  const { t } = useTranslation('common');

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'https://github.com/jaryan728'}>
          <div className="logo">
            <Image
              className="logo"
              width={40}
              height={40}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Aryan Jain'}
        </Link>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>
      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={'#ac'}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href={'#experience'}>
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link href={'#projects'}>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href={'#contact'}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <Icons>
          <Link
            href={'https://github.com/jaryan728'}
            target="_blank"
            aria-label="Link to Github">
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/aryan-jain08'}
            target="_blank"
            aria-label="Link to Linkedin">
            <FiLinkedin />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}