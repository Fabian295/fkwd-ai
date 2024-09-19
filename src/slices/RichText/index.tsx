import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import type { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
// import styles from "./index.module.css";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {

  
  return (
    <section>
      <StarGrid />
      <Bounded className="container max-w-full md:max-w-[70dvw] mx-auto md:max-h-[72.5dvh] ">
      <div className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
      <PrismicRichText field={slice.primary.heading} components={components} />
      </div>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
      <PrismicRichText field={slice.primary.body} />
      </div>

      <PrismicNextImage  className="rounded-xl mt-8" field={slice.primary.logo_image} />

      </Bounded>
    </section>
  );
};

export default RichText;
