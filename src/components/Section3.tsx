import React from "react";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa";

import { getSection3 } from "@/data/section3";

const Section3 = () => {
    const section3Datas = getSection3();

    return (
        <section>
            <div className="container px-10 py-10 lg:py-36 mx-auto space-y-14 lg:space-y-0">
                {/* Row */}
                <div className="flex flex-col lg:flex-row items-center space-x-0 md:space-x-6 justify-between">
                    {/* Col 1 */}
                    <div className="order-2 lg:order-1 space-y-10 w-full lg:w-4/6">
                        <div className="space-y-2">
                            <h2 className="section__heading--2">
                                <span className="text-primary">Inventory</span> management
                            </h2>
                            <p className="section__paragraph">
                                Assist you in tracking your medical supplies and equipment inventory, enabling you to ensure
                                that your clinic is always well-stocked.
                            </p>
                        </div>
                        <div className="space-y-6 justify-between">
                            {section3Datas.map((data) => (
                                <div key={data.id} className="section__item flex items-start space-x-4">
                                    <div className="p-2">
                                        <FaDatabase className="text-secondary-600 text-2xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="section__item__title">{data.title}</p>
                                        <p className="section__item__description">{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div className="flex order-1 lg:order-2 items-center pb-12 lg:pb-0 w-2/3 lg:w-2/6 my-auto">
                        <Image
                            src="/illustrations/medication.svg"
                            alt="medication-illustration"
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
