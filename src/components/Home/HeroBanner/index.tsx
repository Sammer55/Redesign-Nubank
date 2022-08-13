import { Wrapper, Container, Title, Subtitle, CreditCards } from "./styles";
import AccountCard from "./AccountCard";
import Gradient from "rgt";

const HeroBanner = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title>
            O futuro é a razão que a gente faz{" "}
            <Gradient dir="left-to-right" from="#39005F" to="#820AD1">
              planos.
            </Gradient>
          </Title>
          <Subtitle>
            Escolha o futuro. Comece a controlar melhor sua vida financeira com
            o Nubank.
          </Subtitle>
        </div>
        <CreditCards
          src="/credit-cards.png"
          alt="Imagem mostrando dois cartões da Nubank"
        />
        <AccountCard />
      </Container>
    </Wrapper>
  );
};

export default HeroBanner;
