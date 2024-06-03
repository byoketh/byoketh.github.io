import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './portfolio.module.css';
import SMButton from '@site/src/components/socialMediaButton'

const projects = [
  { title: 'richWorld', imgSrc: '/img/logo.svg', description: 'This website!!', href: '/docs/welcome' },
  { title: 'AthCal', imgSrc: '/img/athcal.jpg', description: 'My first project ever! A python3 powered creation from 2020!', href: '/athcal' },
  { title: 'd2Docs', imgSrc: '/img/d2docs.png', description: 'd2Docs started here!', href: '/d2docs' },
  { title: 'richBot', imgSrc: '/img/richBot.png', description: 'This is my Discord Bot!!', href: '/richBot' },
  { title: 'Bash Dotfiles', imgSrc: '/img/undraw_docusaurus_mountain.svg', description: 'Bash Dotfiles I use in my linux environments', href: '/bash-dotfiles' },
];

const achievements = [
  { title: 'UC IT Expo', imgSrc: '/img/soit.jpg', description: 'I was invited to present at the University of Cincinnati\'s IT Expo in 2020 and 2021', href: 'https://cech.uc.edu/soitexpo.html' },
  { title: 'NRC Foundation', imgSrc: '/img/nrc.png', description: 'I\'m the Technical Director at the NRC Foundation', href: 'https://nicholasrcordreyfoundation.org' },
];

const socialMediaLinks = [
  { alt: 'X', url: 'https://x.com/byoketh', imgSrc: '/img/x.svg' },
  { alt: 'GitHub', url: 'https://github.com/byoketh', imgSrc: '/img/github.svg' },
  { alt: 'Discord', url: 'https://discordapp.com/invite/N5ZHJ9qFbJ', imgSrc: '/img/discord.svg' },
  { alt: 'LinkedIn', url: 'https://www.linkedin.com/in/richiecordrey/', imgSrc: '/img/linkedin.svg' },
  { alt: 'Gmail', url: 'mailto:rdcordrey@gmail.com', imgSrc: '/img/gmail.svg'},
];

export default function Portfolio() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) { // Adjust this value as needed
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout
      title="Richie Cordrey - Portfolio"
      description="Richie Cordrey's portfolio page">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.portfolioTitle}>Hey there!</h1>
          <p className={styles.portfolioText}>Currently a computer science student at Western Michigan University, <br/>
           I specialize in software engineering. Aside from my interests in software development, <br/>
           I am an author, designer, and inventor. My passion lies in creation across <br/>
           various fields, driving me to explore and innovate constantly in my free time.</p>
          <div className={styles.portfolioContent}>
          <img
            src="/img/richiec-profile.jpg"
            alt="Profile"
            className={`${styles.profileImage} ${isShrunk ? styles.shrink : ''}`}
          />
            <h3 className={styles.portfolioName}>Richie D. Cordrey</h3>
            <p className={styles.portfolioPronouns}>He/Him/His</p>
            <div className={styles.socialMediaContainer}>
              {socialMediaLinks.map((link, index) => (
                <SMButton key={index} alt={link.alt} to={link.url} img={link.imgSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.portfolioContainer}>
        <h5 className={styles.portfolioTitle}>Projects</h5>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <a key={index} href={project.href} className={styles.projectThumbnail}>
              <img src={project.imgSrc} alt={project.title} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <br/>
        <h5 className={styles.portfolioTitle}>Achievements</h5>
        <div className={styles.achievementGrid}>
          {achievements.map((achievement, index) => (
            <a key={index} href={achievement.href} className={styles.achievementThumbnail} target="_blank" rel="noopener noreferrer">
              <img src={achievement.imgSrc} alt={achievement.title} />
              <div className={styles.achievementInfo}>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </a>
          ))}
        </div>
        </div>
    </Layout>
  );
}
