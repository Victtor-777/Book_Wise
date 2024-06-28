import { signIn } from "next-auth/react";
import { AuthButton, Container } from "./styles";
import { useRouter } from "next/router";

type AuthButtonProps = {
  callbackUrl?: string;
};

export function AuthButtons({ callbackUrl = "/" }: AuthButtonProps) {
  const router = useRouter();

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl);
      return;
    }
    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <img src="/images/icons/google.svg" alt="google logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <img src="/images/icons/github.svg" alt="github logo" />
        Entrar com Github
      </AuthButton>
      <AuthButton onClick={() => handleSignIn()}>
        <img src="/images/icons/rocket.svg" alt="rocket icon" />
        Entrar como Visitante
      </AuthButton>
    </Container>
  );
}
