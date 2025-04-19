/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

export function HomeHero() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Aryan Jain
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading="lazy"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Full Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

         
        </HomeText>

        <ImgHome>
          <img className="home-img" src="/home.png" alt="Image Home" />
          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
