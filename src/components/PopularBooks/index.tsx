import { BookCard } from "../BookCard";
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

      <section>
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard
            key={`popular-${i}`}
            book={{
              author: "John Doe",
              avgRating: 4,
              cover_url: "https://github.com/Victtor-777.png",
              created_at: new Date(),
              id: "sajksajk72382y38",
              name: "Lorem Ipsum color sit amet",
              summary:
                "Lorem Ipsum color sit amet, Lorem Ipsum color sit amet, Lorem Ipsum color sit amet",
              total_pages: 100,
            }}
          />
        ))}
      </section>
    </Container>
  );
};
