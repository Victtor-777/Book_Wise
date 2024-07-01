import Link from "next/link";
import { Container, UserDetails } from "./styles";
import { Avatar } from "../ui/Avatar";
import { Book, Rating, User } from "@prisma/client";
import { Text } from "../Typography";
import { getRelativeTimeString } from "@/utils/getRelativeTime";
import { RatingStars } from "../RatingStars";

export type RatingWithAuthorAndBook = Rating & {
  user: User;
  book: Book;
};

type RatingCardProps = {
  rating: RatingWithAuthorAndBook;
};

export const RatingCard = ({ rating }: RatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-br");

  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size={"sm"} color={"gray-400"}>
              {distance}
            </Text>
          </div>
        </section>

        <RatingStars rating={rating.rate} />
      </UserDetails>
    </Container>
  );
};
