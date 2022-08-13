import { Item, Link, Icon } from "./styles";
import Gradient from "rgt";

type Props = {
  children: string;
  href: string;
};

const Login = ({ children, href }: Props) => {
  return (
    <Item>
      <Link href={href}>
        <Gradient dir="left-to-right" from="#39005F" to="#820AD1">
          {children}
        </Gradient>
        <Icon src="/login-icon.png" alt="Ícone de Login" />
      </Link>
    </Item>
  );
};

export default Login;
