"use client";

import Link from "next/link";
import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import WordMark from "@/components/WordMark";
import ButtonLink from "@/components/ButtonLink";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavBarProps = {
    settings: Content.SettingsDocument
}


export default function NavBar( {settings }: NavBarProps ) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
  return (
    <div>
        <nav className="px-4 py-4 md:px-6 md:py-6" aria-label="Main">
            <div className="mx-auto flex-col max-w-6xl justify-between py-2 font-medium  text-white md:flex-row md:items-center  flex">
               
            <div className="flex items-center justify-between">
                <Link href="/" className="z-50" onClick={() => setOpen(false)}>
                    <WordMark />
                    <span className="sr-only">FKWD-ai Home Page</span>
                </Link>
            
            <button type="button" className="block p-2 text-3xl text-white md:hidden"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                >

                <MdMenu />
                <span className="sr-only">Open Menu</span>
            </button>
            
            </div>
            
            <div className={clsx("fixed left-0 bottom-0 right-0 top-0 z-40 flex flex-col items-end gap-4 bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0": "translate-x-[100%]"
            )}
            >
            
            <button type="button" className="block p-2 text-3xl text-white md:hidden fixed right-4 top-4 mb-4"
                aria-expanded={open}
                onClick={() => setOpen(false)}
                >

                <MdClose />
                <span className="sr-only">Close Menu</span>
            </button>
                
            <div className="grid justify-items-end gap-8">
            {settings.data.navigation.map((item) => {
                if (item.cta_button) {
                    return (
                        <ButtonLink key={item.label} field={item.link_destination}
                        onClick={() => setOpen(false)}
                        aria-current={
                            pathname.includes(asLink( item.link_destination) as string) 
                            ? "page" 
                            : undefined
                        }
                        >
                            {item.label}
                        </ButtonLink>
                    )
                }
                return (
                    <PrismicNextLink 
                    key={item.label}
                    field={item.link_destination}
                    className="block px-3 text-3xl first:mt-8"
                    onClick={() => setOpen(false)}
                    aria-current={
                        pathname.includes(asLink( item.link_destination) as string) 
                        ? "page" 
                        : undefined
                    }>
                        {item.label}
                    </PrismicNextLink>
                )
            })}

            </div>




            </div>    


                <ul className=" gap-6 items-center hidden md:flex">
                    {settings.data.navigation.map(item  => {

                        if ( item.cta_button ) {

                            return (
                                <li key={item.label}>
                                    <ButtonLink field={item.link_destination}
                                        aria-current={
                                            pathname.includes(asLink( item.link_destination) as string) 
                                            ? "page" 
                                            : undefined
                                        }
                                    >
                                        {item.label}
                                    </ButtonLink>
                                </li> 
                            ) 
                        }
                       
                       return (<li key={item.label}>
                            <PrismicNextLink  field={item.link_destination}
                            className="inline-flex bg-emerald-700 min-h-11 items-center transition-all duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r  from-[#a595fe] from-10%  via-[#593ef6] via-40% to-emerald-500 to-85% hover:text-[#92f9cb]"
                            aria-current={
                                pathname.includes(asLink( item.link_destination) as string) 
                                ? "page" 
                                : undefined
                            }
                            >{item.label}</PrismicNextLink>
                        </li>
                    )})}
                </ul>
            </div>
        </nav>
        {/* <div className="text-5xl font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r  from-[#7c68ee] from-10%  via-blue-600 via-45% to-cyan-400  to-80%">
   FK Web Development
  </span>
</div> */}
    </div>
  )
}
