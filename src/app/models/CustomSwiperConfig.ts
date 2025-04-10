import { SwiperConfigInterface } from "./SwiperConfigInterface";

interface CustomSwiperConfig extends SwiperConfigInterface {
  slidesPerView?: number | 'auto';
}

const swiperConfig: CustomSwiperConfig = {
  slidesPerView: 3,
  // other configurations...
};
