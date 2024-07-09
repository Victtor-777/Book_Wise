import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HomeContainer } from "@/styles/pages/home";
import { ProfileRatings } from "@/components/ProfileRatings";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";
import { Rating } from "@prisma/client";

export type ProfileData = {
  user: {
    avatar_url: string;
    name: string;
    member_since: string;
  };
  ratings: Rating[];
  readPages: number;
  ratedBooks: number;
  readAuthors: number;
  mostReadCategory?: string;
};

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = router.query.id as string;

  const { data: profile } = useQuery<ProfileData>({
    queryKey: ["profile", userId],
    queryFn: async () => {
      const { data } = await api.get(`/profile/${userId}`);
      return data?.profile ?? {};
    },
    enabled: !!userId,
  });

  console.log(profile);

  return (
    <HomeContainer>
      <ProfileRatings />
    </HomeContainer>
  );
};

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default ProfilePage;
