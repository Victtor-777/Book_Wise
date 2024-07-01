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
          <RatingCard
            key={i}
            rating={{
              id: "aa",
              rate: 4,
              user: {
                name: "Victtor",
                avatar_url: "https://github.com/Victtor-777.png",
                email: "vitor@gmail.com",
                id: "82363789hd89238yr783",
                created_at: new Date(),
              },
              book: {
                author: "John Doe",
                cover_url: "https://github.com/Victtor-777.png",
                id: "asjkdhjaskd",
                name: "John Doe",
                summary: "John Doe",
                total_pages: 100,
                created_at: new Date(),
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  );
};
