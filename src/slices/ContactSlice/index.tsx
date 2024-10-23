import Bounded from "@/components/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactSlice`.
 */
export type ContactSliceProps = SliceComponentProps<Content.ContactSliceSlice>;

/**
 * Component for "ContactSlice" Slices.
 */
const ContactSlice = ({ slice }: ContactSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded>
        {/* <div className="page-title text-blue-200 text-4xl">
              <PrismicRichText field={slice.primary.pagetitle} />
        </div> */}
        <div className="container w-[80%] glass-container mx-auto mt-10 md:mt-20 lg:mt-30">
          {/* <div className="container mx-auto"> */}

              <div className="contact-form bg-[#051d51] mx-auto p-5 max-w-full md:max-w-[600px] lg:max-w-[1200px]">
              <h2 className="text-[#4f97f0] text-center md:text-2xl mb-5 md:mb-7">Contact Us</h2>
              <form action="#" method="post" id="contactForm">
                <div className="form-group">
                
                  
                  {isFilled.keyText(slice.primary.first_name) && (
                    <label className="block text-[#4f97f0] mb-1 md:mt-3 lg:mt-4 font-bold" htmlFor="firstName">
                      First Name: 

                  </label>
                  )}
                  
                  <PrismicRichText field={slice.primary.first_name_input} />
                  <input className="w-full p-3 md:px-4 lg:px-6 text-white text-lg border border-[#4f97f0] rounded-md box-border outline-none bg-[#00000002]" type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label className="block text-[#4f97f0] mb-1 md:mt-3 lg:mt-4 font-bold" htmlFor="lastName">Last Name:</label>
                  <input className="w-full p-3 md:px-4 lg:px-6 text-white text-lg border border-[#4f97f0] rounded-md box-border outline-none bg-[#00000002]" type="text" id="lastName" name="lastName" required />
                </div>
                <div className="form-group">
                  <label className="block text-[#4f97f0] mb-1 md:mt-3 lg:mt-4 font-bold" htmlFor="email">Email Address:</label>
                  <input className="w-full p-3 md:px-4 lg:px-6 text-white text-lg border border-[#4f97f0] rounded-md box-border outline-none bg-[#00000002]" type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label className="block text-[#4f97f0] mb-1 mt:mb-3 lg:mt-4 font-bold" htmlFor="message">Additional Message:</label>
                  <textarea className="w-full p-3 md:p-4 lg:p-6 text-sky-300 text-sm border border-[#4f97f0] rounded-md box-border outline-none bg-[#0e1142]" id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-btn inline-block px-2 md:px-3 md:py-2 mt-2 md:mt-3 lg:mt-4 w-full bg-[#4f97f0] text-white text-sm lg:text-base hover:bg-[#4F97F080]">Submit</button>
              </form>
            </div>

          {/* </div> */}
        </div>

      </Bounded>
    </section>
  );
};

export default ContactSlice;
