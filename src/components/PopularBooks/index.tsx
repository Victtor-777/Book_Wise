import { Text } from "../Typography";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size={"sm"}>Livros populares</Text>
        <Link href={"/explore"} text="Ver todos" />
      </header>
    </Container>
  );
};
