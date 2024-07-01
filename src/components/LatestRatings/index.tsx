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
                summary:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae reiciendis ullam necessitatibus iusto ad explicabo aperiam molestiae laudantium error esse, praesentium voluptatum. Molestias exercitationem nobis distinctio aspernatur. Quas aliquid ut necessitatibus molestias exercitationem labore, porro corrupti repellendus architecto numquam dolor, ipsam voluptate ipsa unde similique sapiente nihil in optio maiores quo quod aperiam? Voluptate, impedit inventore modi ipsum repellendus odio, corrupti dolorem eaque omnis, eos quia ad. Laborum quibusdam qui similique omnis, iste nesciunt inventore magnam impedit cumque odio reprehenderit ea officiis dolorum velit ducimus deleniti, odit esse blanditiis eveniet deserunt aperiam sequi recusandae laudantium labore! Recusandae soluta, provident sint eius unde eos aperiam officia maxime esse quod necessitatibus consequatur ex alias pariatur excepturi quam exercitationem iste mollitia molestias, corrupti architecto doloribus velit! Totam autem sequi ullam, soluta exercitationem illo incidunt error cum dolores ut, ab impedit minus reprehenderit placeat odit natus animi provident sit ipsam repellat! Perferendis, eum! Neque repudiandae a consequuntur excepturi reprehenderit soluta obcaecati autem veritatis cum repellendus ipsum dignissimos debitis aut similique tempore doloremque ad inventore repellat vitae, quis nam! Laboriosam rerum minima deleniti ad! Consequuntur adipisci est eos aut, quisquam alias voluptatem magnam rem iusto, aliquam neque magni officiis quas! Ut quia perferendis laborum?",
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
