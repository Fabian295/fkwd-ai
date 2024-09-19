import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, ContentRelationshipField, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudySlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = async ({
  slice,
}: CaseStudiesProps): Promise<JSX.Element> => {
  const client = createClient();

  const caseStudies = await Promise.all(
    slice.primary.case_studies.map(async (item) => {
      if (isFilled.contentRelationship(item.case_study)) {
        return await client.getByID<Content.CaseStudyDocument>(
          item.case_study.id,
        );
      }
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 grid gap-16">
        {caseStudies.map(
          (caseStudy, index) =>
            caseStudy && (
              <div
                key={caseStudy.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <h3 className="text-4xl self-start">
                    <PrismicText field={caseStudy.data.company} />
                  </h3>
                  <div className="max-w-md">
                    <PrismicRichText field={caseStudy.data.description} />
                  </div>

                  <PrismicNextLink
                    document={caseStudy}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read <PrismicText field={caseStudy.data.company} /> case
                    study
                  </PrismicNextLink>
                </div>
                <PrismicNextImage
                  field={caseStudy.data.logo_image}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={clsx(
                    "rounded-xl lg:col-span-2",
                    index % 2 && "md:-order-1",
                  )}
                />
              </div>
            ),
        )}
      </div>
    </Bounded>
  );
};

export default CaseStudies;















// import { createClient } from "@/prismicio";
// import { Content, isFilled} from "@prismicio/client";
// import { PrismicNextLink } from "@prismicio/next";
// import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `CaseStudy`.
//  */
// export type CaseStudyProps = SliceComponentProps<Content.CaseStudySlice>;

// /**
//  * Component for "CaseStudy" Slices.
//  */
// const CaseStudy = async ({ slice }: CaseStudyProps): Promise<JSX.Element> => {
//   const client = createClient()
//   const caseStudies = await Promise.all(slice.items.map(async (item) => {
//     if (isFilled.contentRelationship(item.case_study)) {
//       return await client.getByID<Content.CaseStudyDocument>( item.case_study.id);
//     }
//   }))
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >

//       <PrismicRichText field={slice.primary.heading} />
//       <PrismicRichText field={slice.primary.body} />
//       {/* <PrismicNextLink field={slice.primary.case_study_label}>
//         Link
//       </PrismicNextLink> */}

//       <div className="mt-20 grid gap-16">
//       {caseStudies.map((caseStudy, index) => (
//         caseStudy && (
//         <div key={caseStudy.id} className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
//         <h3 className="text-4xl">
//           <PrismicText field={caseStudy.data.company} />
//         </h3>

//         <div className="max-w-md">
//             <PrismicRichText field={caseStudy.data.description} />
//         </div>
//         <PrismicNextLink document={caseStudy} className="after:absolute inset-0 hover:underline">
//           Read <PrismicText field={caseStudy.data.company} /> Case Study
//           </PrismicNextLink>
//         </div>
//         )
//       ) )}
//       </div>
//     </section>
//   );
// };

// export default CaseStudy;










// import { createClient } from "@/prismicio";
// import { Content, isFilled} from "@prismicio/client";
// import { PrismicNextLink } from "@prismicio/next";
// import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `CaseStudy`.
//  */
// export type CaseStudyProps = SliceComponentProps<Content.CaseStudySlice>;

// /**
//  * Component for "CaseStudy" Slices.
//  */
// const CaseStudy = async ({ slice }: CaseStudyProps): Promise<JSX.Element> => {
//   const client = createClient()
//   const caseStudies = await Promise.all(slice.items.map(async (item) => {
//     if (isFilled.contentRelationship(item['case_study'])) {
//       return await client.getByID<Content.CaseStudyDocument>( item['case_study']['id']);
//     }
//   }))
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >

//       <PrismicRichText field={slice.primary.heading} />
//       <PrismicRichText field={slice.primary.body} />
//       {/* <PrismicNextLink field={slice.primary.case_study_label}>
//         Link
//       </PrismicNextLink> */}

//       <div className="mt-20 grid gap-16">
//       {caseStudies.map((caseStudy, index) => (
//         caseStudy && (
//         <div key={caseStudy.id} className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
//         <h3 className="text-4xl">
//           <PrismicText field={caseStudy.data.company} />
//         </h3>

//         <div className="max-w-md">
//             <PrismicRichText field={caseStudy.data.description} />
//         </div>
//         <PrismicNextLink document={caseStudy} className="after:absolute inset-0 hover:underline">
//           Read <PrismicText field={caseStudy.data.company} /> Case Study
//           </PrismicNextLink>
//         </div>
//         )
//       ) )}
//       </div>
//     </section>
//   );
// };

// export default CaseStudy;
