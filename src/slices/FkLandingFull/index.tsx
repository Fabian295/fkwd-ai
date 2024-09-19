import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FkLandingFull`.
 */
export type FkLandingFullProps =
  SliceComponentProps<Content.FkLandingFullSlice>;

/**
 * Component for "FkLandingFull" Slices.
 */
const FkLandingFull = ({ slice }: FkLandingFullProps): JSX.Element => {
  return (
    <section className="w-screen min-h-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StarGrid />
      <Bounded>
        <div className="container bg-[#0b0311] mx-auto min-h-screen text-white">
          <h1 className=" max-w-max text-center p-4 bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-800 bg-clip-text text-transparent text-5xl md:text-7xl mx-auto">
            FKWD Landing
          </h1>

        </div>
      </Bounded>
    </section>
  );
};

export default FkLandingFull;
