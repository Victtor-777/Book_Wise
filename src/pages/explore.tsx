import { ExploreContainer, TagsContainer } from "@/styles/pages/explore";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { PageTitle } from "@/components/ui/PageTitle";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "@/components/ui/Form/Input";
import { useState } from "react";
import { Tag } from "@/components/ui/Tag";

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>("");

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
        <Tag active>
          Todos
        </Tag>
        <Tag>
          Computação
        </Tag>
      </TagsContainer>

    </ExploreContainer>
  );
};

ExplorePage.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>;
};

export default ExplorePage;
