import { Col, Container, Row, ProgressBar, Image, Badge, Carousel, Dropdown } from 'react-bootstrap';
import './App.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { PiSoccerBallFill, PiMotorcycleFill } from "react-icons/pi";
import Project from './Project';
import { useState } from 'react';
import EducationItem from './EducationItem';
import React from 'react';

export interface Education {
  from: string,
  to: string,
  institution: string,
  description: string
}

export enum Language { FR, DE, EN }

function App() {
  const formation: Education[] = require('./data/formation.json')
  const ausbildung: Education[] = require('./data/ausbildung.json')
  const education: Education[] = require('./data/education.json')
  const [language, setLanguage] = useState(Language.FR)

  return (
    <Container>
      <Row>
        <Col>
          <Row style={{ marginLeft: 0, marginRight: 0 }}>
            <Col>
              <h1 style={{ marginBottom: 0 }}>Stefan Am Ende</h1>
            </Col>
            <Col className='col-auto'>
              <Dropdown style={{ marginTop: 10, marginRight: 10 }}>
                <Dropdown.Toggle variant='secondary'>
                  {language === Language.FR && <Image style={languageIcon} src='/icons/france.png' />}
                  {language === Language.DE && <Image style={languageIcon} src='/icons/germany.png' />}
                  {language === Language.EN && <Image style={languageIcon} src='/icons/united-kingdom.png' />}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setLanguage(Language.FR)}>
                    <Image style={languageIcon} src='/icons/france.png' />
                    Français
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage(Language.DE)}>
                    <Image style={languageIcon} src='/icons/germany.png' />
                    Deutsch
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage(Language.EN)}>
                    <Image style={languageIcon} src='/icons/united-kingdom.png' />
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <h2>
            {language === Language.FR && 'Diplômé en Informatique'}
            {language === Language.DE && 'Absolvent der Informatik'}
            {language === Language.EN && 'Gradute in Computer Science'}
          </h2>
          <h3>
            {(language === Language.FR || language === Language.DE) && 'Profil'}
            {language === Language.EN && 'Profile'}
          </h3>
          <p className='description'>
            {language === Language.FR && "Ayant fini mes études en informatique en janvier de cette année à l'âge de 23 ans, je suis désormais à la recherche du prochain challange dans mon parcours professionel. Passioné par les technologies digitales, je suis particulièrement intéressé par le monde du web. Par ailleurs, je suis toujours motivé pour élargir mon horizon en apprenant de nouveaux langages, frameworks et technologies."}
            {language === Language.DE && 'Nachdem ich im Januar diesen Jahres mein Informatikstudium im Alter von 23 Jahren erfolgreich abgeschlossen habe, bin ich nun auf der Suche nach der nächsten beruflichen Herausforderung. Begeistert von digitalen Technologien, interessiere ich mich besonders für die Welt des Webs. Außerdem bin ich stets motiviert meinen Horizont zu erweitern und neue Programmiersprachen, Frameworks und Technologien zu lernen.'}
            {language === Language.EN && 'After having finished my studies in computer science in january this year at the age of 23 I am now looking for the next challenge in my professional career. Passionate about digital technologies, I am particularly interested the world of the web. Moreover, I am always motivated to broaden my horizon by learning new programming languages, frameworks and technologies.'}
          </p>
          <h3>
            {language === Language.FR && 'Formation'}
            {language === Language.DE && 'Ausbildung'}
            {language === Language.EN && 'Education'}
          </h3>
          <Container fluid>
            {language === Language.FR && formation.map((item, index) => {
              return (
                <EducationItem item={item} key={index} />
              )
            })}
            {language === Language.DE && ausbildung.map((item, index) => {
              return (
                <EducationItem item={item} key={index} />
              )
            })}
            {language === Language.EN && education.map((item, index) => {
              return (
                <EducationItem item={item} key={index} />
              )
            })}
          </Container>
          <h3>
            {language === Language.FR && 'Projets'}
            {language === Language.DE && 'Projekte'}
            {language === Language.EN && 'Projects'}
          </h3>
          <Carousel variant="dark" interval={null} wrap={false} style={{ marginTop: 20 }}>
            <Carousel.Item>
              {language === Language.FR &&
                <Project language={language} title='Thèse de Master' subtitle='08/2023 - 01/2024' description={
                  <p className='description'>Extension d'un système d'exécution de processus d'affaires décentralisé pour l'intégration de fonctionnalités de messagerie à l'aide du protocole <span style={bold}>Matrix</span>, <span style={bold}>React</span>, <span style={bold}>Express</span>, <span style={bold}>Typescript</span> et <span style={bold}>Spring Boot</span>.</p>
                } link='https://gitlab.com/bpm-dpex/' />
              }
              {language === Language.DE &&
                <Project language={language} title='Masterarbeit' subtitle='08/2023 - 01/2024' description={
                  <p className='description'>Erweiterung eines dezentralen Prozessausführungssystems durch die Integration von Messagingfunktionalitäten mithilfe des <span style={bold}>Matrix</span>protokolls, <span style={bold}>React</span>, <span style={bold}>Express</span>, <span style={bold}>Typescript</span> und <span style={bold}>Spring Boot</span>.</p>
                } link='https://gitlab.com/bpm-dpex/' />
              }
              {language === Language.EN &&
                <Project language={language} title='Masterthesis' subtitle='08/2023 - 01/2024' description={
                  <p className='description'>Extension of a decentralized process execution system by integrating messaging funcionalities by using the <span style={bold}>Matrix</span> protocol, <span style={bold}>React</span>, <span style={bold}>Express</span>, <span style={bold}>Typescript</span> and <span style={bold}>Spring Boot</span>.</p>
                } link='https://gitlab.com/bpm-dpex/' />
              }
            </Carousel.Item>
            <Carousel.Item>
              {language === Language.FR &&
                <Project language={language} title="Projet d'études" subtitle='04/2023 - 07/2023' description={
                  <p className='description'>Conception et développement d'un système d'élection décentralisé sur Ethereum à l'aide de <span style={bold}>Solidity</span>, <span style={bold}>Web3JS</span>, <span style={bold}>Express</span> et <span style={bold}>React</span>.</p>
                } link='https://github.com/Bachelorpraktikum-Solutions/voting-app' />
              }
              {language === Language.DE &&
                <Project language={language} title="Studienprojekt" subtitle='04/2023 - 07/2023' description={
                  <p className='description'>Konzeption und Entwicklung eines dezentralen Wahlsystems auf Ethereum mithilfe von <span style={bold}>Solidity</span>, <span style={bold}>Web3JS</span>, <span style={bold}>Express</span> und <span style={bold}>React</span>.</p>
                } link='https://github.com/Bachelorpraktikum-Solutions/voting-app' />
              }
              {language === Language.EN &&
                <Project language={language} title="Study Project" subtitle='04/2023 - 07/2023' description={
                  <p className='description'>Conception and development of a decentralized election system on Ethereum by using <span style={bold}>Solidity</span>, <span style={bold}>Web3JS</span>, <span style={bold}>Express</span> and <span style={bold}>React</span>.</p>
                } link='https://github.com/Bachelorpraktikum-Solutions/voting-app' />
              }
            </Carousel.Item>
            <Carousel.Item>
              {language === Language.FR &&
                <Project language={language} title="Projet d'études" subtitle='06/2022 - 07/2022' description={
                  <p className='description'>Création d'un système de recommendation de cours universitaires. Intervention uniquement sur le frontend avec <span style={bold}>React</span>.</p>
                } />
              }
              {language === Language.DE &&
                <Project language={language} title="Studienprojekt" subtitle='06/2022 - 07/2022' description={
                  <p className='description'>Umsetzung eines Empfehlungssystem für Universitätskurse. Mitarbeit nur am Frontend mit <span style={bold}>React</span>.</p>
                } />
              }
              {language === Language.EN &&
                <Project language={language} title="Study Project" subtitle='06/2022 - 07/2022' description={
                  <p className='description'>Realization of a recommendation system for university courses. Working only on the frontend with <span style={bold}>React</span>.</p>
                } />
              }
            </Carousel.Item>
            <Carousel.Item>
              {language === Language.FR &&
                <Project language={language} title='Webmaster bénévole' subtitle='04/2022 - 12/2023' description={
                  <p className='description'>Développement et maintenace d'un site internet pour mon ancien club de foot en utilisant <span style={bold}>React</span> et <span style={bold}>Netlify</span>. (<a href='http://usc-bayreuth.de' target='_blank' rel='noreferrer'>usc-bayreuth.de</a>)</p>
                } link='https://github.com/USC-Bayreuth/USC-Website' />
              }
              {language === Language.DE &&
                <Project language={language} title='Ehrenamtlicher Webmaster' subtitle='04/2022 - 12/2023' description={
                  <p className='description'>Entwicklung und Pflege einer Internetseite für meinen ehemaligen Fußballverein mithilfe von <span style={bold}>React</span> und <span style={bold}>Netlify</span>. (<a href='http://usc-bayreuth.de' target='_blank' rel='noreferrer'>usc-bayreuth.de</a>)</p>
                } link='https://github.com/USC-Bayreuth/USC-Website' />
              }
              {language === Language.EN &&
                <Project language={language} title='Volunteer Webmaster' subtitle='04/2022 - 12/2023' description={
                  <p className='description'>Development and maintenance of a website for my former football club using <span style={bold}>React</span> and <span style={bold}>Netlify</span>. (<a href='http://usc-bayreuth.de' target='_blank' rel='noreferrer'>usc-bayreuth.de</a>)</p>
                } link='https://github.com/USC-Bayreuth/USC-Website' />
              }
            </Carousel.Item>
            <Carousel.Item>
              {language === Language.FR &&
                <Project language={language} title='Thèse de Bachelor' subtitle='04/2021 - 09/2021' description={
                  <p className='description'>Extension d'un framework pour la visualisation de lignes de produits logiciel pilotées par modèle basé sur <span style={bold}>Ecore</span>, <span style={bold}>Java</span> et <span style={bold}>SWT</span>.</p>
                } />
              }
              {language === Language.DE &&
                <Project language={language} title='Bachelorarbeit' subtitle='04/2021 - 09/2021' description={
                  <p className='description'>Erweiterung eines Frameworks zu Visualisierung von modellgetriebenen Softwareproduktlinien auf Basis von <span style={bold}>Ecore</span>, <span style={bold}>Java</span> und <span style={bold}>SWT</span>.</p>
                } />
              }
              {language === Language.EN &&
                <Project language={language} title='Bachelor Thesis' subtitle='04/2021 - 09/2021' description={
                  <p className='description'>Extension of a framework for model driven software product lines based on <span style={bold}>Ecore</span>, <span style={bold}>Java</span> and <span style={bold}>SWT</span>.</p>
                } />
              }
            </Carousel.Item>
            <Carousel.Item>
              {language === Language.FR &&
                <Project language={language} title="Projet d'études" subtitle='10/2020 - 04/2021' description={
                  <p className='description'>Conception et développement d'un système de gestion de littérature. Intervention sur le front- et le backend avec <span style={bold}>Express</span> et <span style={bold}>React</span>.</p>
                } />
              }
              {language === Language.DE &&
                <Project language={language} title="Studienprojekt" subtitle='10/2020 - 04/2021' description={
                  <p className='description'>Konzeption und Entwicklung eines Literaturverwaltungssystems. Mitarbeit an Front- und Backend mit <span style={bold}>Express</span> und <span style={bold}>React</span>.</p>
                } />
              }
              {language === Language.EN &&
                <Project language={language} title="Study Project" subtitle='10/2020 - 04/2021' description={
                  <p className='description'>Conception and development of literature management system. Working on front- and backend with <span style={bold}>Express</span> and <span style={bold}>React</span>.</p>
                } />
              }
            </Carousel.Item>
          </Carousel>
          {language === Language.FR &&
            <p>*Notes dans le <a href='https://fr.wikipedia.org/wiki/Note_scolaire#Allemagne' target='_blank' rel='noreferrer'>système de notation allemand</a></p>
          }
          {language === Language.EN &&
            <p>*Grades in the <a href='https://en.wikipedia.org/wiki/Academic_grading_in_Germany#Tertiary_education' target='_blank' rel='noreferrer'>German grading system</a></p>
          }
        </Col>
        <Col className='col-3' style={{ background: '#530087' }}>
          <Image style={{ marginTop: 15, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src='./profile-picture.jpg' className='profile-picture' />
          <Container fluid style={{ marginLeft: 15, marginTop: 15 }}>
            <Row>
              <Col className='col-auto'>
                <FaLocationDot style={{ color: 'white' }} />
              </Col>
              <Col style={{ marginLeft: 10 }}>
                <a href='https://maps.app.goo.gl/YkytdcQSkuxGU5X16' target='_blank' rel='noreferrer' className='facts'>D-95447 Bayreuth</a>
              </Col>
            </Row>
            <Row>
              <Col className='col-auto'>
                <IoMdMail style={{ color: 'white' }} />
              </Col>
              <Col style={{ marginLeft: 10 }}>
                <a className='facts' href='mailto:stefan.amende2000@gmail.com'>stefan.amende2000@gmail.com</a>
              </Col>
            </Row>
            <Row>
              <Col className='col-auto'>
                <MdLocalPhone style={{ color: 'white' }} />
              </Col>
              <Col style={{ marginLeft: 10 }}>
                <a className='facts' href='tel:+4915153665190'>+49 151 53665190</a>
              </Col>
            </Row>
          </Container>
          <Container fluid style={{ marginLeft: 3, marginTop: 10 }}>
            <h4>
              {language === Language.FR &&
                'Compétences'
              }
              {language === Language.DE &&
                'Kenntnisse'
              }
              {language === Language.EN &&
                'Expertise'
              }
            </h4>
            <Badge>React</Badge>
            <Badge>CSS</Badge>
            <Badge>Typescript</Badge>
            <br />
            <Badge>Node</Badge>
            <Badge>Express</Badge>
            <br />
            <Badge>Git</Badge>
            <br />
            <Badge>Java</Badge>
            <Badge>Spring Boot</Badge>
            <br />
            <Badge>Python</Badge>
            <Badge>C++</Badge>
          </Container>
          <Container fluid style={{ marginLeft: 3, marginTop: 10 }}>
            <h4>
              {language === Language.FR &&
                'Qualités'
              }
              {language === Language.DE &&
                'Stärken'
              }
              {language === Language.EN &&
                'Strenghts'
              }
            </h4>
            <ul className='facts' style={{ paddingLeft: 22 }}>
              <li>
                {language === Language.FR &&
                  'Persévérance'
                }
                {language === Language.DE &&
                  'Ausdauer'
                }
                {language === Language.EN &&
                  'Perseverance'
                }
              </li>
              <li>
                {language === Language.FR &&
                  "Capacité d'apprendre"
                }
                {language === Language.DE &&
                  'Lernfähigkeit'
                }
                {language === Language.EN &&
                  'Learning ability'
                }
              </li>
              <li>
                {language === Language.FR &&
                  'Autonomie'
                }
                {language === Language.DE &&
                  'Eigenständigkeit'
                }
                {language === Language.EN &&
                  'Autonomy'
                }
              </li>
            </ul>
          </Container>
          <Container fluid style={{ marginLeft: 3, marginTop: 10 }}>
            <h4>
              {language === Language.FR &&
                'Langues'
              }
              {language === Language.DE &&
                'Sprachen'
              }
              {language === Language.EN &&
                'Languages'
              }
            </h4>
            <Row>
              <Col>
                <p className='facts' style={{ marginLeft: 12 }}>
                  {language === Language.FR &&
                    'Allemand'
                  }
                  {language === Language.DE &&
                    'Deutsch'
                  }
                  {language === Language.EN &&
                    'German'
                  }
                </p>
              </Col>
              <Col className='col-auto'>
                <p className='language-level' >
                  {language === Language.FR &&
                    'langue maternelle'
                  }
                  {language === Language.DE &&
                    'Muttersprache'
                  }
                  {language === Language.EN &&
                    'native language'
                  }
                </p>
              </Col>
            </Row>
            <ProgressBar now={100} />
            <Row style={{ marginTop: 5 }}>
              <Col>
                <p className='facts' style={{ marginLeft: 12 }}>
                  {language === Language.FR &&
                    'Français'
                  }
                  {language === Language.DE &&
                    'Französisch'
                  }
                  {language === Language.EN &&
                    'French'
                  }
                </p>
              </Col>
              <Col className='col-auto'>
                <p className='language-level' >C1</p>
              </Col>
            </Row>
            <ProgressBar now={83} />
            <Row style={{ marginTop: 5 }}>
              <Col>
                <p className='facts' style={{ marginLeft: 12 }}>
                  {language === Language.FR &&
                    'Anglais'
                  }
                  {language === Language.DE &&
                    'Englisch'
                  }
                  {language === Language.EN &&
                    'English'
                  }
                </p>
              </Col>
              <Col className='col-auto'>
                <p className='language-level' >C1</p>
              </Col>
            </Row>
            <ProgressBar now={83} />
          </Container>
          <Container fluid style={{ marginLeft: 3, marginTop: 10 }}>
            <h4>
              {language === Language.FR &&
                "Loisirs"
              }
              {(language === Language.DE || language === Language.EN) &&
                'Hobbies'
              }

            </h4>
            <div style={{ marginLeft: 12 }}>
              <Row>
                <Col className='col-auto'>
                  <FaRunning style={{ color: 'white' }} />
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <p className='facts'>
                    {language === Language.FR &&
                      'Course à pied'
                    }
                    {language === Language.DE &&
                      'Joggen'
                    }
                    {language === Language.EN &&
                      'Running'
                    }
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className='col-auto'>
                  <PiSoccerBallFill style={{ color: 'white' }} />
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <p className='facts'>
                    {language === Language.FR &&
                      'Foot'
                    }
                    {language === Language.DE &&
                      'Fußball'
                    }
                    {language === Language.EN &&
                      'Football'
                    }
                  </p>
                </Col>
              </Row>
              <Row style={{ marginBottom: 15 }}>
                <Col className='col-auto'>
                  <PiMotorcycleFill style={{ color: 'white' }} />
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <p className='facts'>
                    {language === Language.FR &&
                      'Voyages en moto'
                    }
                    {language === Language.DE &&
                      'Motorradreisen'
                    }
                    {language === Language.EN &&
                      'Motorcycle travelling'
                    }
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

const bold = { fontWeight: 600 }
const languageIcon = {
  height: 20,
  width: 20,
  position: 'relative' as const,
  right: 3,
  bottom: 3,
  marginRight: 4
}