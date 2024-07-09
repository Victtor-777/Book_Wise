import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
import { Container } from "./styles";
import { PageTitle } from "../ui/PageTitle";
import { User } from "@phosphor-icons/react";
import { Link } from "../ui/Link";

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category;
      }[];
  };
};

type ProfileRatingProps = {
  ratings: ProfileRating[];
  isOwnProfile: boolean;
};

export const ProfileRatings = ({
  isOwnProfile,
  ratings,
}: ProfileRatingProps) => {
  return (
    <Container>
      {isOwnProfile ? (
        <PageTitle title="Perfil" icon={<User size={25} />} />
      ) : (
        <Link
          href="/"
          text="Voltar"
          iconSide={"left"}
          color={"white"}
          css={{ alignSelf: "flex-start" }}
        />
      )}
    </Container>
  );
};
