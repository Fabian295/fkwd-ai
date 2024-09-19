import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
// import FkLogo from "../Integrations/FkLogo";
// import Logo from "./fk-diamond.svg";
import FkLogoDiamond from "@/components/FKLogoDiamond";

/**
 * Props for `Cases`.
 */
export type CasesProps = SliceComponentProps<Content.CasesSlice>;

/**
 * Component for "Cases" Slices.
 */
const Cases = ({ slice }: CasesProps): JSX.Element => {
  return (
    <section className="max-w-full p-0 mx-auto mb-40"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
       <StarGrid />
       <Bounded className="glass-container max-w-full mx-auto lg:max-w-[70dvw] ">
          <div className={clsx("relative  bg-blue-900/30 before:border before:border-blue-900/60 before:rounded-2xl before:border-spacing-4 before:absolute before:blur-sm before:filter before:-inset-12 before:-z-10",
              "border border-blue-900/40 flex flex-col lg:flex-row gap-16 justify-between items-center p-4  lg:p-6 rounded-2xl max-w-[98%] min-h-[100%] lg:justify-center lg:flex-wrap text-center mx-auto",
                // slice.variation === 'Default' ?
                //  "flex-row" : 
                //  "flex-col"
                  )}
              >
              <div className="content">
                  <div className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
                  <PrismicRichText field={slice.primary.case_title} />
                  </div>

                  <div className="mx-auto mt-6 max-w-md text-balance text-left text-slate-300">
                    <PrismicRichText field={slice.primary.case_body} />
                  </div>
              </div>

              {/* <div className="max-w-4xl flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-6 md:gap-8"> */}
                <PrismicNextImage field={slice.primary.case_image}  quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw}"
                    className={
                      "rounded-xl mt-8"
                    }/>

                      <div className="glass-container max-w-2xl border-10 border-blue-500/50 border-rounded-lg rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 p-4 md:rounded-xl">
                        <FkLogoDiamond />
                      {/* </div> */}
                    </div>
              {/* </div> */}
          </div>
        </Bounded>
    </section>
  );
};

export default Cases;
