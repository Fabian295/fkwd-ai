import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type Hero2Props = SliceComponentProps<Content.Hero2Slice>;

const Hero2 = ({ slice }: Hero2Props): JSX.Element => {
  return (
    <div className="glass-container es-bounded max-h-[75dvh] relative">
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" es-fullpage-hero"
    >
      <div
        className={`es-fullpage-hero__content ${
          slice.variation === "imageRight"
            ? "es-fullpage-hero__image--right"
            : "es-fullpage-hero__image--left"
        }  w-[100%] h-[100%]`}
      >
        <div className="bg-slate-950 p-8 rounded-xl ">
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage 
              field={slice.primary.image}
              className="es-fullpage-hero__image max-w-[100%] mx-auto"
            />
          )}
        </div>

        <div className="es-fullpage-hero__content-right bg-slate-950/70 rounded-t-xl rounded-b-xl">
          <div className="es-fullpage-hero__content__intro">
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <p className="es-fullpage-hero__content__intro__eyebrow">
                {slice.primary.eyebrowHeadline}
              </p>
            )}
            {isFilled.richText(slice.primary.title) && ( 
              <div className="es-fullpage-hero__content__intro__headline">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className="es-fullpage-hero__content__intro__description">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
            {isFilled.link(slice.primary.callToActionLink) && (
              <PrismicNextLink
                className="es-call-to-action__link glass-container  bg-cyan-800/30 hover:bg-cyan-400/20"
                field={slice.primary.callToActionLink}
              >
                {slice.primary.callToActionLabel || "Learn more…"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          .es-bounded {
              margin: 0px;
              margin-inline: 1.5rem;
              margin-top: 2.5rem;
              min-width: 0px;
              position: relative;
          }
          
          .es-fullpage-hero {
              font-family: Raleway, system-ui, sans-serif;
          }
          
          .es-fullpage-hero__image { 


            
              max-width: 100%;
              hight: 100%;
              
          }
              
          .es-fullpage-hero__image--left > div:first-child {
              order: 1;
          }
          
          .es-fullpage-hero__image--left > div:nth-child(2) {
              order: 2;
          }
              
          .es-fullpage-hero__image--right > div:first-child {
              order: 2;
          }
          
          .es-fullpage-hero__image--right > div:nth-child(2) {
              order: 1;
          }
          
          .es-fullpage-hero__content {
              display: flex;
              flex-direction: column;
              gap: 2rem;
          }
          
          .es-fullpage-hero__content-right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 1.5rem;
          }
          
          @media (min-width: 1080px) {
              .es-fullpage-hero__content {
                  flex-direction: row;
              }
              
              .es-fullpage-hero__content > div {
                  width: 50%;

                  p, div {
                    /* background-color: #202020;*/
                    width: 100%;
                    padding-inline: 0.5rem;
                    margin: 1rem auto;

                  },

                 div p {
                    font-size: 1rem;
                  },

                  a {
                    display: inline-block;
                    margin: 1.25rem auto;
                    width: 50%;
                    text-align: center;
                  }
              }
          }
          
          .es-fullpage-hero__content__intro {
              display: grid;
              gap: 1rem;
          }
          
          .es-fullpage-hero__content__intro__eyebrow {
              color: #47C1AF;
              color: #10b981;
              font-size: 1.15rem;
              font-weight: 500;
              margin: 0;
          }
          
          .es-fullpage-hero__content__intro__headline {
              font-size: 1.625rem;
              font-weight: 700;
          }
          
          .es-fullpage-hero__content__intro__headline * {
              margin: 0;
          }
          
          @media (min-width: 640px) {
              .es-fullpage-hero__content__intro__headline {
                  font-size: 2rem;
              }
          }
          
          @media (min-width: 1024px) {
              .es-fullpage-hero__content__intro__headline {
                  font-size: 2.5rem;
              }
          }
          
          @media (min-width: 1200px) {
              .es-fullpage-hero__content__intro__headline {
                  font-size: 2.75rem;
              }
          }
          
          .es-fullpage-hero__content__intro__description {
              font-size: 1.15rem;
              max-width: 38rem;
          }
          
          .es-fullpage-hero__content__intro__description > p {
            width: 100%;
              margin: 0;
          }
          
          @media (min-width: 1200px) {
              .es-fullpage-hero__content__intro__description {
                  font-size: 1.1rem;
              }
          }

          .es-call-to-action__link {
              justify-self: center;
              border-radius: 40px;
              font-size: 1.5rem;
              line-height: 1.3;
              padding: 1rem 3.625rem;
              transition: background-color 100ms linear;
              background-color: #16745f;
              background-color: #0d5e4c;
              
              color: #fff;
          }
          
          .es-call-to-action__link:hover {
             background-color: none; 
             
          }
      `}
      </style>
    </section>
    </div>
  );
};

export default Hero2;
