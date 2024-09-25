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
    gsap.registerPlugin(useGSAP)

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.fromTo(".hero__heading", {scale: 0.5}, {scale: 1, opacity: 1})
        tl.fromTo(".hero__body", {scale: 0.5}, {scale: 1, opacity: 1})
        tl.fromTo(".hero__button", {scale: 0.5}, {scale: 1, opacity: 1})
        tl.fromTo(".hero__image", {scale: 0.5}, {scale: 1, opacity: 1})
        tl.fromTo(".hero__glow", {scale: 0.5}, {scale: 1, opacity: 1})
        
    }, { scope: container })
  return (
        <div className="relative" ref={container}>
            <StarGrid />
            {isFilled.richText(slice.primary.heading) && (
            <h1 className="hero__heading text-balance text-violet-400 text-2xl font-medium md:text-4xl opacity-0">
                <PrismicText field={slice.primary.heading} />
            </h1>
            )}
            
            {isFilled.richText(slice.primary.body) && (
            <div className="hero__body mx-auto mt-6 text-slate-300 text-balance max-w-md md:max-w-4xl opacity-0">
                <PrismicRichText field={slice.primary.body} />
            </div>
            )}

            {isFilled.link(slice.primary.button_link) &&  (
            <ButtonLink className="hero__button mt-8 opacity-0"
            field={slice.primary.button_link}>
                {slice.primary.button_label}
            </ButtonLink>
            )}

            {isFilled.image(slice.primary.image) && (
            <div className="hero__image glass-container mt-16 w-fit opacity-0">
                <div className="hero__glow absolute  inset-0 -z-10 bg-indigo-500/40 blur-2xl filter opacity-0" />
                <div className="bg-slate-950/60 p-8 rounded-xl">
                <PrismicNextImage className="rounded-lg" field={slice.primary.image} />
                </div>
            </div>
            )}
        </div> 
    )
}
