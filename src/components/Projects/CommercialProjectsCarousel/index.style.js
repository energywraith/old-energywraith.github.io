import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselContainer = styled(Swiper)`
  opacity: 0;
  transition: transform 1000ms, opacity 500ms;
  transform: scale(0);
  transition-delay: 500ms;
  ${(props) =>
    props.triggeredinview === "true" && "opacity: 1; transform: scale(1);"};
  padding: 3rem 1rem;

  @media (max-width: 768px) {
    padding: 1em;
    margin-top: 1em;
  }
`;
