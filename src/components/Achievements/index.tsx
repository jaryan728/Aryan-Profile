/* eslint-disable @next/next/no-img-element */
import achievements from '../../data/achievements';
import { AchievementsContainer, AchievementsContent } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { motion } from 'framer-motion';

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Title style={{ marginBottom: '3rem', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
          Accolades!
          <span>
            <HiOutlineDesktopComputer /> Outstanding
          </span>
        </Title>
        <AchievementsContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem', // Standard gap for spacing
            padding: '1rem',
          }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.8)', // Glow effect on hover
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderRadius: '15px',
                background: 'linear-gradient(145deg, #1e1e2f, #23233a)',
                padding: '1.5rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Default shadow
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Shiny Effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '200%',
                  height: '100%',
                  background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transform: 'rotate(25deg)',
                  animation: 'shine 2s infinite',
                }}
              ></div>
              <AchievementsContent
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                  }}
                >
                  {achievement.name}
                </h2>
              </AchievementsContent>
            </motion.div>
          ))}
        </AchievementsContainer>
      </motion.div>
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          50% {
            left: 0%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </Container>
  );
}