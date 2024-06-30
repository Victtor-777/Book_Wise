import { ChartLineUp } from "@phosphor-icons/react";
import { PageTitle } from "../ui/PageTitle";
import { Container } from "./styles";
import { Text } from "../Typography";
import { RatingCard } from "../RatingCard";

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size={"sm"}>Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard key={i} />
        ))}
      </section>
    </Container>
  );
};
