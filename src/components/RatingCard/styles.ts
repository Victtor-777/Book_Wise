import Image from "next/image";
import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  borderRadius: 8,
  padding: "$6",
  display: "flex",
  flexDirection: "column",
  background: "$gray700",
});

export const UserDetails = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  marginBottom: "$8",

  section: {
    display: "flex",
    alignItems: "center",
    gap: "$4",
  },
});

export const BookDetails = styled("div", {
  display: "flex",
  gap: "$5",

  img: {
    borderRadius: 4,
  },
});

export const BookImage = styled(Image, {
  minWidth: 108,
  objectFit: "cover",
  transition: "0.2s",

  "&:hover": {
    filter: "brightess(1.33)",
  },
});

export const BookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const ToggleShowMoreButton = styled("button", {
  background: "none",
  border: "none",
  fontSize: "0.875rem",
  color: "$purple100",
  fontWeight: "bold",
  marginLeft: "$1",
});
