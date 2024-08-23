import React from "react";

import EmailForm from "@/components/EmailForm";
import Icon from "@/components/Icon";

const BookSection = () => (
    <section id="book-demo">
        <div className="container px-10 py-10 md:py-20 mx-auto space-y-14 md:space-y-16 lg:space-y-24">
            {/* Row */}
            <div className="flex flex-col lg:flex-row p-20 lg:space-x-8 space-y-6 lg:space-y-0 bg-secondary-300 rounded-xl">
                {/* Col 1 */}
                <div className="flex flex-col space-y-6 lg:w-1/2">
                    <div className="space-y-4">
                        <h2 className="section__heading--2">Book demo</h2>
                        <p className="section__paragraph">
                            See how NOAK can help you improve your clinic operations. Book a free demo today!
                        </p>
                    </div>
                    <ul className="section__check-list space-y-6">
                        <li className="section__item__title flex flex-row w-11/12">
                            <Icon name="frame_17" width={24} height={24} />
                            &nbsp;&nbsp;Automation for clinic operations
                        </li>
                        <li className="section__item__title flex flex-row w-11/12">
                            <Icon name="frame_17" width={24} height={24} />
                            &nbsp;&nbsp;Integrated systems
                        </li>
                        <li className="section__item__title flex flex-row w-11/12">
                            <Icon name="frame_17" width={24} height={24} />
                            &nbsp;&nbsp;Inventory management
                        </li>
                        <li className="section__item__title flex flex-row w-11/12">
                            <Icon name="frame_17" width={24} height={24} />
                            &nbsp;&nbsp;Data security
                        </li>
                    </ul>
                </div>

                {/* Col 2 */}
                <div className="space-y-10 md:space-y-14 lg:space-y-0 lg:w-1/2">
                    <div className="p-10 bg-white rounded-xl shadow-custom-down">
                        <EmailForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default BookSection;
