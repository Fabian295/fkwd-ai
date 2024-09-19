import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
// import PlainLogo from "./PlainLogo";
// import PlainGradientLogo from "./PlainGradientLogo";
import ButtonLink from "@/components/ButtonLink";
import FkIconLogoBlue from "@/slices/CallToActionSlice/FkIconLogoBlue";
import FKIconPurple from "./FKIconPurple";

/**
 * Props for `CallToActionSlice`.
 */
export type CallToActionSliceProps =
  SliceComponentProps<Content.CallToActionSliceSlice>;

/**
 * Component for "CallToActionSlice" Slices.
 */
const CallToActionSlice = ({ slice }: CallToActionSliceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-32 text-center font-medium md:py-40"
    >
      {/* Placeholder component for call_to_action_slice (variation:{" "}
      {slice.variation}) Slices */}
      <div className="glow absolute -z-10 aspect-square rounded-full w-full max-w-sm bg-blue-500/50 blur-[160px] filter" />

      <div className="max-w-screen flex flex-row justify-between items-center gap-16 mx-auto">
        <div className="glass-container rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 p-4 md:rounded-xl">
          {/* <PlainGradientLogo /> */}
          <FkIconLogoBlue />
        </div>
        <div className="glass-container rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 p-4 md:rounded-xl">
          {/* <PlainGradientLogo /> */}
          <FKIconPurple />
        </div>
        <div className="glass-container rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 p-4 md:rounded-xl">
          {/* <PlainGradientLogo /> */}
          <FkIconLogoBlue />
        </div>
      </div>

      <div className="text-balance mt-8 max-w-xl text-5xl">
        <PrismicText field={slice.primary.heading} />
      </div>

      <ButtonLink field={slice.primary.button_link} className="mt-6">
        {slice.primary.button_text || "Learn More..."}
      </ButtonLink>
    </Bounded>
  );
};

export default CallToActionSlice;
