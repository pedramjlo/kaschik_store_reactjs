import { Carousel } from "flowbite-react";

import WomanModel from '../../static/images/jennifer-marquez-NYMDlpfum1Q-unsplash.jpg';
import ManModel from '../../static/images/bailey-alexander-Ms2AGDRcOLo-unsplash.jpg';



export default function MainCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={6000}>
        <img src={WomanModel} alt="Woman Model" />
        <img src={ManModel} alt="Man Model" />
      </Carousel>
    </div>

)};
