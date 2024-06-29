import { Navigation } from "../Navigation";
import { Container } from "./styles";

export const Sidebar = () => {
  return (
    <Container>
      <div>
        <img className="logo" src="/images/logo.svg" alt="Bookwise Logo" />

        <Navigation />
      </div>
    </Container>
  );
};
