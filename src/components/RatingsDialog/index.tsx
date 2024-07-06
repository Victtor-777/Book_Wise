import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from "./styles";
import { BookmarkSimple, BookOpen, X } from "@phosphor-icons/react";
import { Heading, Text } from "../Typography";
import { RatingStars } from "../RatingStars";
import { BookInfo } from "./BookInfo";
import { BookRatings } from "../BookRatings";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { BookWithAvgRating } from "../BookCard";
import { RatingWithAuthor } from "../UserRatingCard";
import { categories } from "./../../../prisma/constants/categories";
import { CategoriesOnBooks, Category } from "@prisma/client";

type BookDetails = BookWithAvgRating & {
  rattings: RatingWithAuthor[];
  categories: (CategoriesOnBooks & {
    category: Category;
  })[];
};

type RatingsDialogProps = {
  bookId: string;
  children: ReactNode;
};

export const RatingsDialog = ({ bookId, children }: RatingsDialogProps) => {
  const [open, setOpen] = useState(false);

  const { data: book } = useQuery<BookDetails>({
    queryKey: ["book", bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`);
      return data?.book ?? {};
    },
    enabled: open,
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                width={171}
                height={242}
                alt="Book name"
                src={"https://github.com/Victtor-777.png"}
              />
              <BookContent>
                <div>
                  <Heading size={"sm"}>Book Name</Heading>
                  <Text color={"gray-300"} css={{ marginTop: "$2" }}>
                    Joe Doe
                  </Text>
                </div>

                <div>
                  <RatingStars rating={4} size={"md"} />
                  <Text
                    color={"gray-400"}
                    size={"sm"}
                    css={{ marginTop: "$1" }}
                  >
                    2 avaliações
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>
            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="217" />
            </BookInfos>
          </BookDetailsWrapper>

          <BookRatings />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
