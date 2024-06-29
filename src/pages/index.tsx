import { signOut, useSession } from "next-auth/react";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => signOut()}>Deslogar</button>
    </div>
  );
};

HomePage.getLayout = (page) => {
  return (
    <div>
      <p>Layout</p>
      {page}
    </div>
  );
};

export default HomePage;
