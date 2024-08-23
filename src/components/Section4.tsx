import React from "react";
import Image from "next/image";

import Icon from "@/components/Icon";
import { getSection4 } from "@/data/section4";

const Section4 = () => {
    const section4Datas = getSection4();

    return (
        <section>
            <div className="container px-10 py-10 lg:py-20 mx-auto space-y-14 lg:space-y-0">
                {/* Row */}
                <div className="flex flex-col lg:flex-row items-center space-x-0 md:space-x-6 justify-between">
                    {/* Col 1 */}
                    <div className="flex items-center md:pb-12 lg:pb-0 w-2/3 lg:w-2/6">
                        <Image
                            src="/illustrations/security.svg"
                            alt="security-illustration"
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-8 w-full lg:w-4/6">
                        <div className="space-y-2">
                            <h2 className="section__heading--2">
                                <span className="text-primary">Data</span> security
                            </h2>
                            <p className="section__paragraph">
                                We use the security technology to protect your data from unauthorized access.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {section4Datas.map((data) => (
                                <div key={data.id} className="section__item flex items-start space-x-4">
                                    <div className="flex items-center">
                                        <Icon name={data.icon} width={48} height={48} />
                                    </div>
                                    <div className="flex flex-col items-start space-y-2 w-11/12">
                                        <p className="section__item__title">{data.title}</p>
                                        <p className="section__item__description">{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
