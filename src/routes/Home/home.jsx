
import { Container, Row, Col, Stack, Card, Image, Button} from 'react-bootstrap';
import banner from '../../assets/banner.png'
import logo from '../../assets/logo-black.png'
import './home.scss';

const Home = () => {
    return (
        <Container className='home-container'>
          <Row>
            <Col xs={8}>
              <Card>
                <Image src={banner} fluid />
              </Card>
              <Row className='mt-3'>
                <Col className='centered-column mt-5'>
                  <Image src={logo} className='logo' />
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      O PlantON, diante do aumento de médicos no Brasil, enfrenta desafios na distribuição. Essencial para otimizar alocações, o aplicativo conecta médicos a hospitais, promovendo distribuição equitativa de recursos e cobertura abrangente.
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col>
              <Stack gap={0}>
                <Card>
                  <Card.Header><b>O que é a solução</b></Card.Header>
                  <Card.Body>
                    O PlantON, um aplicativo inovador, otimiza alocação de médicos em plantões hospitalares, combatendo a escassez médica. Médicos e hospitais interagem, cadastrando plantões e qualificações, agendando participações. O projeto visa eficiência na alocação, flexibilidade para médicos e redução de ociosidade.
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header><b>O que ela fará</b></Card.Header>
                  <Card.Body>
                    O aplicativo PlantON tem como objetivo principal criar uma plataforma eficiente para alocação médica em plantões, com cadastros simples para médicos e hospitais. Benefícios incluem alocação rápida, flexibilidade para médicos e resposta a emergências. Vantagens abrangem redução de ociosidade, cobertura de especialidades, e otimização financeira. Funcionalidades incluem cadastro, busca, agendamento, perfis, avaliações e notificações.
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header><b>Como funcionará</b></Card.Header>
                  <Card.Body>
                    O PlantON oferece características como cadastro detalhado, busca personalizada, avaliações, notificações em tempo real e calendário integrado. Limites e requisitos técnicos são claros, com foco na privacidade e desenvolvimento multiplataforma. O projeto busca parcerias médicas para validação.
                  </Card.Body>
                </Card>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col>
                <span className='benefits'>Vantagens</span>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Stack direction="horizontal" gap={5}>
                <Card>
                  <Card.Header><b>Alocação Rápida de Recursos</b></Card.Header>
                  <Card.Body>
                    Permite que hospitais identifiquem médicos disponíveis e especializados de forma rápida em situações de aumento de demanda, como emergências ou picos sazonais.
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header><b>Flexibilidade para Médicos</b></Card.Header>
                  <Card.Body>
                  Oferece aos médicos a oportunidade de escolher horários flexíveis e participar de plantões ou turnos de acordo com sua disponibilidade, o que pode ser benéfico para profissionais com agendas variáveis.
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header><b>Resposta Rápida a Emergências</b></Card.Header>
                  <Card.Body>
                  Possibilita uma resposta mais ágil em emergências, permitindo que médicos se conectem imediatamente aos hospitais que precisam de assistência adicional.
                  </Card.Body>
                </Card>
              </Stack>
            </Row>
          </Row>
        </Container>
      );
}


export default Home;