import React from "react";
import Image from "next/image";

const Header = () => (
    <header>
        <div className="container px-10 py-14 mx-auto">
            <div className="flex flex-row justify-between">
                <div className="flex justify-start w-1/2">
                    <Image src="/logo.svg" alt="Noak Logo" width={600} height={200} className="w-1/2 md:1/3 lg:w-1/6" />
                </div>
                <div className="flex justify-end w-1/2">
                    <a href="#book-demo" className="button--primary">
                        Book demo
                    </a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
