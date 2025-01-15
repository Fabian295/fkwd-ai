"use client";

import React, { useRef } from 'react'
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
// import { HeroProps } from '.';

export default function AnimatedContent({ slice }: {slice: Content.HeroSlice}) {
// export default function AnimatedContent({ slice }: SliceComponentProps<Content.HeroSlice>): React.JSX.Element {
    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion()
    gsap.registerPlugin(useGSAP)

    useGSAP(() => {

        if ( prefersReducedMotion ) {
            gsap.set(
                ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
                { opacity: 1 }                
            );
            return
        }

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        tl.fromTo(".hero__heading", {scale: 0.5}, {scale: 1, opacity: 1,  duration: 1})
        tl.fromTo(
            ".hero__body", 
            { y: 30 }, 
            { y: 0, opacity: 1,  duration: 1.2 },
            "-=0.2"
         )
        tl.fromTo(
            ".hero__button", 
            { scale: 2 }, 
            { scale: 1, opacity: 1, duration: 1.5, ease: "bounce.out" },
            "-=0.4"
            )
        tl.fromTo(
            ".hero__image", 
            { y: 100 }, 
            { y: 0, opacity: 1, duration: 1.3 },
            "-=0.6"
            )
        tl.fromTo(
            ".hero__glow", 
            { scale: 0.5 }, 
            { scale: 1, opacity: 1, duration: 1.1 }, 
            "-=0.5"
            )
        
    }, { scope: container })
  return (
        <div className="relative" ref={container}>
            <StarGrid />
            {isFilled.richText(slice.primary.heading) && (
            <h1 className="hero__heading text-balance text-violet-400 text-3xl max-w-xl mx-auto font-medium md:max-w-3xl md:text-4xl  lg:max-w-4xl lg:text-5xl first-letter: opacity-0">
                <PrismicText field={slice.primary.heading} />
            </h1>
            )}
            
            {isFilled.richText(slice.primary.body) && (
            <div className="hero__body mx-auto mt-6 text-slate-300 text-left text-balance text-sm max-w-md md:max-w-xl lg:max-w-4xl lg:text-lg opacity-0">
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
