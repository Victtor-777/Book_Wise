import Link from "next/link";
import { Container, UserDetails } from "./styles";
import { Avatar } from "../ui/Avatar";
import { Book, Rating, User } from "@prisma/client";
import { Text } from "../Typography";

export type RatingWithAuthorAndBook = Rating & {
  user: User;
  book: Book;
};

type RatingCardProps = {
  rating: RatingWithAuthorAndBook;
};

export const RatingCard = ({ rating }: RatingCardProps) => {
  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size={"sm"} color={"gray-400"}></Text>
          </div>
        </section>
        nota
      </UserDetails>
    </Container>
  );
};
