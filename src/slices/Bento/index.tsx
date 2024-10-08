import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for bento (variation: {slice.variation}) Slices */}

      <PrismicRichText field={slice.primary.heading}
      components={{
        heading2: ({ children }) => (
          <h2 className="text-balance text-center text-4xl font-medium md:text-5xl">
            { children }
          </h2>
        ),
        em: ({ children }) => (
          <em className="bg-gradient-to-b from-[bisque] to-[goldenrod]/50 bg-clip-text not-italic text-transparent">
            { children }
          </em>
        )
      }}
      
      />
{/* 
      <div className="mx-auto mt-6 text-balance text-center max-w-md text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

    <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">

        {slice.primary.bento.map((item) => {
          return (
          <div className={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-950 p-4",
          item.wide ? "md:col-span-2" : "md:col-span-1",
         ) }
          key={asText(item.title)}>

            <h3 className="text-2xl">
              <PrismicText field={item.title} />
            </h3>


            <div className="max-w-md text-balance text-slate-300">
              <PrismicRichText field={item.body} />
            </div>
              <PrismicNextImage field={item.image} className="max-h-36 w-auto"  />
            </div>
          );
        })}

    </div> */}

    {slice.variation === "default"}

    <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {slice.primary.bento.map((item) => (
          <div
            className={clsx(
              "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4",
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
            key={asText(item.title)}
          >
            <h3 className={clsx("text-2xl",
            slice.variation === "flowMix" ? "row-start-2 row-span-1" : ""

            )}>
              <PrismicText field={item.title} />
            </h3>
            <div className={clsx("max-w-md text-balance text-slate-300",
            slice.variation === "flowMix" ? "row-start-3 row-span-1" : ""
            )}>
              <PrismicRichText field={item.body} />
            </div>
            <PrismicNextImage field={item.image} className={clsx("max-h-36 w-fit object-cover",
            slice.variation === "flowMix" ? "row-start-1 row-span-1" : ""
            )} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;
