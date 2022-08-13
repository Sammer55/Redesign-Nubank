import ChevronDownIcon from "icons/chevronDown";
import { Item, Link, Bullet } from "./styles";

type Props = {
  children: string;
  type?: "bullet" | "down";
  href: string;
};

const ListItem = ({ children, type = "bullet", href }: Props) => {
  return (
    <Item>
      <Link href={href}>
        {type === "bullet" && <Bullet />}
        {type === "down" && <ChevronDownIcon />}
        {children}
      </Link>
    </Item>
  );
};

export default ListItem;
