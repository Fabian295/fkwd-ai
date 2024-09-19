import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Key } from "react";

/**
 * Props for `HeroUnboxed`.
 */
export type HeroUnboxedProps = SliceComponentProps<Content.HeroUnboxedSlice>;

/**
 * Component for "HeroUnboxed" Slices.
 */
const HeroUnboxed = ({ slice }: HeroUnboxedProps): JSX.Element => (
  <section className="text-white text-center bg-indigo-800 p-16"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >

    <div className="container">

      <div className="glass-container">
        <ul>
          {slice.items.map((item:any, ind) => {
            return <li key={item.ind} className="px-4 py-2">
              hex-color: 
            </li>;
            // Render the item
          })}
        </ul>
      </div>

    </div>

  </section>
);

export default HeroUnboxed;
