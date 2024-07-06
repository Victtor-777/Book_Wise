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
import { TextArea } from "../ui/Form/TextArea";

type RatingFormProps = {
  onCancel: () => void;
  bookId: string;
};

export const RatingForm = ({ onCancel, bookId }: RatingFormProps) => {
  const { data: session } = useSession();

  const user = session?.user;

  const [description, setDescription] = useState("");
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
        <TextArea
          placeholder="Escreva a sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer></ActionsContainer>
      </FormContainer>
    </Container>
  );
};
