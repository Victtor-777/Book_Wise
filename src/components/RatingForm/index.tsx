import { useSession } from "next-auth/react";
import {
  ActionsContainer,
  Container,
  FormContainer,
  UserDetails,
} from "./styles";
import { Avatar } from "../ui/Avatar";
import { Heading } from "../Typography";
import { RatingStars } from "../RatingStars";
import { useState } from "react";

type RatingFormProps = {
  onCancel: () => void;
  bookId: string;
};

export const RatingForm = ({ onCancel, bookId }: RatingFormProps) => {
  const { data: session } = useSession();

  const user = session?.user;

  const [currentSize, setCurrentSize] = useState(0);

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size={"xs"}>{user.name}</Heading>
          </section>

          <RatingStars size={"lg"} rating={currentSize} />
        </UserDetails>
      )}

      <FormContainer>
        <textarea />
        <ActionsContainer></ActionsContainer>
      </FormContainer>
    </Container>
  );
};
