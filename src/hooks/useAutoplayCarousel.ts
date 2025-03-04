import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export const useAutoplayCarousel = ({ delay = 2000, loop = true } = {}) => {
  const plugin = useRef(Autoplay({ delay, stopOnInteraction: true }));

  return {
    carouselProps: {
      plugins: [plugin.current],
      opts: { loop },
      onMouseEnter: () => plugin.current?.stop(),
      onMouseLeave: () => plugin.current?.play(),
    },
  };
};
