import React from "react";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa";

const Footer = () => (
    <footer>
        <div className="container px-8 pt-14 pb-8 mx-auto space-y-6 text-center lg:text-left">
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-12 space-y-6 xl:space-y-0">
                {/* Col 1 */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/3 space-y-4 xl:space-y-10">
                    <Image src="/logo.svg" alt="Noak Logo" width={600} height={200} className="w-1/3" />
                    <p className="section__note--gray">
                        Revolutionize your healthcare practice with NOAK, the comprehensive solution for managing clinics and
                        doctors effectively.
                    </p>
                </div>

                {/* Col 2 */}
                <div className="lg:w-1/3 space-y-3">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-0 lg:space-x-4">
                        <div className="py-2">
                            <FaDatabase className="text-primary text-xl" />
                        </div>
                        <div className="m-0 py-2 space-y-3">
                            <p>Noak Pte Ltd.</p>
                            <p>7 Temasek Boulevard, #12-07, Suntec Tower One, Singapore 038987</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-0 lg:space-x-4">
                        <div className="py-2">
                            <FaDatabase className="text-primary text-xl" />
                        </div>
                        <div className="m-0 py-2">
                            <p>noak@noak.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-0 lg:space-x-4">
                        <div className="py-2">
                            <FaDatabase className="text-primary text-xl" />
                        </div>
                        <div className="m-0 py-2">
                            <p>+65 00000000</p>
                        </div>
                    </div>
                </div>

                {/* Col 3 */}
                <div className="lg:w-1/3 space-y-4">
                    <b className="text-xl font-semibold">Subscribe for updates</b>
                    <div className="flex space-x-4">
                        <input type="text" className="input w-4/6" placeholder="Email Address" />
                        <button type="submit" className="button--primary">
                            Subscribe
                        </button>
                    </div>
                    <p className="section__note">Get the latest on NOAK. Subscribe for features and news updates.</p>
                </div>
            </div>

            {/* Row 2 */}
            <div className="w-full pt-8 pb-4 text-center border-t border-black-100">
                <p className="text-sm xl:text-lg text-black-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </footer>
);

export default Footer;
