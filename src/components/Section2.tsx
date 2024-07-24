import React from "react";

import Icon from "@/components/Icon";
import { getSection2 } from "@/data/section2";

const Section2 = () => {
    const section2Datas = getSection2();

    return (
        <section className="bg-secondary-300">
            <div className="container px-10 py-10 md:py-20 mx-auto space-y-10 md:space-y-14">
                {/* Row 1 */}
                <div className="flex flex-col space-y-10 justify-center">
                    <div className="space-y-2">
                        <h2 className="section__heading--2">
                            <span className="text-primary">Integrated</span> systems
                        </h2>
                        <p className="section__paragraph">
                            Integrated systems that allow you to access information centrally and more efficiently.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {section2Datas.map((data) => (
                            <div key={data.id} className="space-y-5 p-8 bg-white rounded-xl shadow-custom-down h-full">
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

export default Section2;
