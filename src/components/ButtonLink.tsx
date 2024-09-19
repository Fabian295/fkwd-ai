// src/components/ButtonLink.tsx
// variation1 -  hover:text-[#92f9cb]
// variation2 -  hover:text-[#e692f9]
// variation3 -  hover:text-[#ac92f9]
// variation4 -  hover:text-[#c292f9]
// variation4 -  hover:text-[#6500ff]

import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "focus:ring-offset-3 relative text-sm font-light md:font-medium md:text-base inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-1 my-4 md:px-6 text-indigo-200 outline-none ring-indigo-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-indigo-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-indigo-200/40 hover:text-[#c292f9] after:hover:bg-opacity-15 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
}
