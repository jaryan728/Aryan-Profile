import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';
import { ProjectsContainer, ProjectsContent } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Works
        <span>
          <HiOutlineDesktopComputer />Project
        </span>
        <img className="vector" width={100} height={100} src="/vectors/code.svg" alt="project" />
      </Title>

      <ProjectsContainer>
        {projects.slice(0, 9).map(project => (
          <Link href={`${project.url}`} key={project.id}>
            <ProjectsContent>
              <Image width={400} height={210} src={project.img} alt={project.title} loading="lazy" />
              <div className="title">
                <h2>{project.title}</h2>
                <div className="tags">
                  {project.tech.map(tag => (
                    <Image width={32} height={32} key={tag.name} src={tag.icon} alt={tag.name} loading="lazy" />
                  ))}
                </div>
              </div>
            </ProjectsContent>
          </Link>
        ))}
      </ProjectsContainer>
    </Container>
  );
}