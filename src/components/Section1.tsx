import React from "react";
import Image from "next/image";

import Icon from "@/components/Icon";
import { getSection1 } from "@/data/section1";

const Section1 = () => {
    const section1Datas = getSection1();

    return (
        <section>
            <div className="container px-10 py-10 md:py-20 mx-auto space-y-14 md:space-y-16 lg:space-y-28">
                {/* Row */}
                <div className="flex flex-col space-y-12 justify-center items-center">
                    <Image
                        src="/illustrations/testing.svg"
                        alt="testing-illustration"
                        width={500}
                        height={500}
                        className="w-1/2"
                    />
                    <div className="space-y-2 text-center">
                        <h2 className="section__heading--2">
                            <span className="text-primary">Automation</span> for clinic operations
                        </h2>
                        <p className="section__paragraph">
                            Enhance the efficiency of your clinical workflow by automating repetitive tasks.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row md:space-x-6 space-y-10 md:space-y-14 lg:space-y-0 justify-between">
                        {section1Datas.map((data) => (
                            <div key={data.id} className="flex flex-col items-center text-center space-y-5">
                                <Icon name={data.icon} width={48} height={48} />
                                <div className="space-y-3">
                                    <p className="section__item__title">{data.title}</p>
                                    <p className="section__item__description">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
