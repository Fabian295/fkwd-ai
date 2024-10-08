import Image from "next/image";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { FaDigitalOcean, FaCloudflare, FaNpm, FaGithub, FaFigma, FaFly } from "react-icons/fa6";

import StylizedLogoMark from "./StylizedLogoMark";
import Bounded from "@/components/Bounded";
import StarBackground from "./StarBackground";
import  background from './background.jpg'
import flave from './flave-csi.png'
import React from "react";
import FkLogoDiamond from "@/components/FKLogoDiamond";
import DiamondFK from "./DiamondFK";
import clsx from "clsx";
// import PlainGradientLogo from "../CallToActionSlice/PlainGradientLogo";
import FkIconLogoBlueSM from "../../components/FkIconLogoBlueSM";
import FKLogoBlueXS from "../../components/FKLogoBlueXS";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */


const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {

const icons = {
  digitalocean: <FaDigitalOcean />,
  cloudflare: <FaCloudflare />,
  npm: <FaNpm />,
  github: <FaGithub />,
  figma: <FaFigma />,
  fly: <FaFly />,
};
  return (
    <Bounded className="relative overflow-hidden"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
       <Image 
        src={background}
        fill
        className="object-cover" alt={""}
       />
              <Image 
        src={flave}
        fill
        className="object-cover opacity-35" alt={""}
       />
      {/* <StarBackground /> */}
      <div className="relative">

        <h2 className="max-w-5xl text-balance text-center text-5xl font-medium mx-auto md:text-6xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="mt-20 flex flex-col items-center md:flex-row md:max-w-7xl md:mx-auto">
        {slice.primary.icons.map((item, index) => (
          // Render the item
          <React.Fragment key={index}>
            {index === Math.floor(slice.primary.icons.length / 2) && (
              < >
                {/* <StylizedLogoMark /> */}
                {/* <FkLogoDiamond /> */}
                {/* <PlainGradientLogo /> */}
                {/* <DiamondFK /> */}
                {/* <div className="max-w-[160px] max-h-[160px] aspect-square"> */}
                  {/* <FkIconLogoBlue/> */}
                  {/* <FkIconLogoBlueSM/> */}
                  <FKLogoBlueXS />
                {/* </div> */}
                <div className="signal-line rotate-180 bg-gradient-to-t" />
              </>
            )}
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              {item.icon && icons[item.icon]}
            </div>
            <div className={clsx("signal-line",
            
              index >= Math.floor(slice.primary.icons.length / 2)
              ? "rotate-180"
              : "rotate-0"

            )}/>
          </React.Fragment>
        ))}
        </div>

      </div>
    </Bounded>
  );
};

export default Integrations;
