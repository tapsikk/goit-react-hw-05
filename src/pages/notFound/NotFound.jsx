// import { Container, Heading, Section} from '/src/components';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Section from '../../components/Section/Section';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Heading title="NotFound" bottom />
        <p>Go to the <Link to='/'>Home</Link>.</p>
      </Container>
    </Section>
  );
};

export default NotFound;