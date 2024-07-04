import { BooksGrid, ExploreContainer, TagsContainer } from "@/styles/pages/explore";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { PageTitle } from "@/components/ui/PageTitle";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "@/components/ui/Form/Input";
import { useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { BookCard, BookWithAvgRating } from "@/components/BookCard";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@prisma/client";
import { api } from "@/lib/axios";

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("/books/categories");
      return data?.categories ?? [];
    },
  });

  const { data: books } = useQuery<BookWithAvgRating[]>({
    queryKey: ["books", selectedCategory],
    queryFn: async () => {
      const { data } = await api.get("/books", {
        params: {
          category: selectedCategory,
        }
      });

      return data?.books ?? []
    }
  })

  const filteredBooks = books?.filter((book) => {
    return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          css={{maxWidth: 443}}
        />
      </header>

      <TagsContainer>
        <Tag active={selectedCategory === null} onClick={() => setSelectedCategory(null)}>
          Todos
        </Tag>
        {categories?.map((categorie) => (
          <Tag key={categorie.id} active={selectedCategory === categorie.id} onClick={() => setSelectedCategory(categorie.id)} >
            {categorie.name}
          </Tag>
        ))}
      </TagsContainer>

      <BooksGrid>
        {filteredBooks?.map((book) => (
          <BookCard key={book.id} size={"lg"} book={book} />
        ))}
      </BooksGrid>

    </ExploreContainer>
  );
};

ExplorePage.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>;
};

export default ExplorePage;
