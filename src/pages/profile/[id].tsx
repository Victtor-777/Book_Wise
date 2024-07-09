import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HomeContainer } from "@/styles/pages/home";
import { ProfileRatings } from "@/components/ProfileRatings";

const ProfilePage: NextPageWithLayout = () => {
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
