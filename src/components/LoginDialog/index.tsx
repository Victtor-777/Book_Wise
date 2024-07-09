import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogClose, DialogContent, DialogOverlay } from "./styles";
import { X } from "@phosphor-icons/react";
import { Heading } from "../Typography";
import { AuthButtons } from "../AuthButtons";

type LoginDialogProps = {
  children: ReactNode;
};

export const LoginDialog = ({ children }: LoginDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <div>
            <Heading size={"xs"} color={"gray-200"} css={{ marginBottom: 40 }}>
              Faça login para deixar sua avaliação
            </Heading>
            <AuthButtons callbackUrl={`/explore`} />
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
