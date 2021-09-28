import Logo from '../../assets/logo.svg';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <h1>Busca Cep</h1>
    </Container>
  );
}
