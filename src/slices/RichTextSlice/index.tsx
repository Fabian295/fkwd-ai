import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RichTextSlice`.
 */
export type RichTextSliceProps =
  SliceComponentProps<Content.RichTextSliceSlice>;

/**
 * Component for "RichTextSlice" Slices.
 */
const RichTextSlice = ({ slice }: RichTextSliceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="prose prose-invert prose-lg prose-slate">
      <PrismicRichText field={slice.primary.content_block} />
      </div>
    </Bounded>
  );
};

export default RichTextSlice;
