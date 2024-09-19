"use client";

import React, { useRef } from 'react'
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import { HeroProps } from '.';

export default function AnimatedContent({ slice }: {slice: Content.HeroSlice}) {
// export default function AnimatedContent({ slice }: SliceComponentProps<Content.HeroSlice>): React.JSX.Element {
    const container = useRef(null);
  return (
        <div className="relative" ref={container}>
            <StarGrid />
            {isFilled.richText(slice.primary.heading) && (
            <h1 className="text-balance text-cyan-200 text-4xl font-medium md:text-6xl">
                <PrismicText field={slice.primary.heading} />
            </h1>
            )}
            
            {isFilled.richText(slice.primary.body) && (
            <div className="mx-auto mt-6 text-slate-300 text-balance max-w-md md:max-w-4xl">
                <PrismicRichText field={slice.primary.body} />
            </div>
            )}

            {isFilled.link(slice.primary.button_link) &&  (
            <ButtonLink className="mt-8"
            field={slice.primary.button_link}>
                {slice.primary.button_label}
            </ButtonLink>
            )}

            {isFilled.image(slice.primary.image) && (
            <div className="glass-container mt-16 w-fit">
                <div className="absolute  inset-0 -z-10 bg-indigo-500/40 blur-2xl filter" />
                <div className="bg-slate-950/60 p-8 rounded-xl">
                <PrismicNextImage className="rounded-lg" field={slice.primary.image} />
                </div>
            </div>
            )}
        </div> 
    )
}
