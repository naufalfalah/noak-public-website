import React from "react";
import Image from "next/image";

const HeroSection = () => (
    <section>
        <div className="container px-10 py-16 mx-auto">
            {/* Row */}
            <div className="flex flex-col lg:flex-row gap-12 justify-between">
                {/* Col 1 */}
                <div className="flex flex-col order-2 lg:order-1 space-y-10 items-center lg:items-start my-auto w-full lg:w-1/2">
                    <div className="space-y-2">
                        <h1 className="section__heading text-center lg:text-left">
                            The <span className="text-primary">All-in-One</span> Clinic and Doctor Management App
                        </h1>
                        <p className="section__paragraph text-center lg:text-left">
                            Revolutionize your healthcare practice with NOAK, the comprehensive solution for managing clinics
                            and doctors effectively.
                        </p>
                    </div>
                    <div className="flex space-x-2 md:space-x-6">
                        <button type="button" className="button--primary">
                            &nbsp;&nbsp;Book demo
                        </button>
                        <button type="button" className="button--outline">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Col 2 */}
                <div className="flex order-1 lg:order-2 items-center my-auto w-full lg:w-1/2">
                    <Image
                        src="/illustrations/doctors.svg"
                        alt="hero-illustration"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
