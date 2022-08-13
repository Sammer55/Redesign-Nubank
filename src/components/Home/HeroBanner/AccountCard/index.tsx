import { Wrapper, Title, Input, Button, ButtonText } from "./styles";
import ArrowRightIcon from "icons/arrowRight";

const AccountCard = () => {
  return (
    <Wrapper>
      <Title>Peça sua conta e cartão de crédito do Nubank:</Title>
      <Input placeholder="Digite seu melhor e-mail:" />
      <Button>
        <ButtonText>Continuar</ButtonText>
        <ArrowRightIcon />
      </Button>
    </Wrapper>
  );
};

export default AccountCard;
