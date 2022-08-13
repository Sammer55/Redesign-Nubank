import { Wrapper, Container, Items } from "./styles";
import ListItem from "./ListItem";
import LogoIcon from "icons/logo";
import Login from "./Login";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Items>
          <ListItem href="/">Página inicial</ListItem>
          <ListItem href="/">Para você</ListItem>
          <ListItem href="/" type="down">
            Para seu negócio
          </ListItem>
        </Items>
        <LogoIcon />
        <Items>
          <ListItem href="/" type="down">
            O Nubank
          </ListItem>
          <ListItem href="/" type="down">
            Perguntas
          </ListItem>
          <Login href="/">Fazer login</Login>
        </Items>
      </Container>
    </Wrapper>
  );
};

export default Header;
