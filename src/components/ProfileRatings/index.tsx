import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
import { Container, RatingsList } from "./styles";
import { PageTitle } from "../ui/PageTitle";
import { MagnifyingGlass, User } from "@phosphor-icons/react";
import { Link } from "../ui/Link";
import { Input } from "../ui/Form/Input";
import { useState } from "react";
import { ProfileRatingCard } from "./ProfileRatingCard";

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
  const [search, setSearch] = useState<string>("");
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
      <Input
        placeholder="Buscar Livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        css={{ marginTop: 40, marginBottom: 32 }}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <RatingsList>
        {ratings.map((rating) => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
      </RatingsList>
    </Container>
  );
};
