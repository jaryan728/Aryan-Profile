import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Achievements } from "../components/Achievements";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Education } from "../components/Education";
import { Wakatime } from "../components/Coding/Wakatime";
import { Certificates } from "../components/Certificates/index";
import { Work_Experience } from "../components/Work/index";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en');
  }, [router.locale]);


  return (
    <>
      <Head>
        <title>{currentLang === 'ta' ? 'சரவணகுமாரின் போர்ட்ஃபோலியோ' : ' Aryan Jain\'s Portfolio'} </title>
      </Head>
      <ScrollTop />
      <Section>
        <HomeHero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <CardContact />
      </Section>
      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});