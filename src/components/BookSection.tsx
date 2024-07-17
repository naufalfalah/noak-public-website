import React from "react";

import PhoneNumberSelect from "@/components/PhoneNumberSelect";

const BookSection = () => (
    <section>
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
                    <ul className="section__check-list space-y-4">
                        <li className="section__item__title">
                            <i className="text-secondary-600 text-4xl" />
                            &nbsp;&nbsp;Automation for clinic operations
                        </li>
                        <li className="section__item__title">
                            <i className="text-secondary-600 text-4xl" />
                            &nbsp;&nbsp;Integrated systems
                        </li>
                        <li className="section__item__title">
                            <i className="text-secondary-600 text-4xl" />
                            &nbsp;&nbsp;Inventory management
                        </li>
                        <li className="section__item__title">
                            <i className="text-secondary-600 text-4xl" />
                            &nbsp;&nbsp;Data security
                        </li>
                    </ul>
                </div>

                {/* Col 2 */}
                <div className="space-y-10 md:space-y-14 lg:space-y-0 lg:w-1/2">
                    <div className="p-10 bg-white rounded-xl shadow-custom-down">
                        <form action="" method="post" className="space-y-6">
                            <div className="flex flex-row space-x-4">
                                <input type="text" className="input w-1/2" placeholder="First name" />
                                <input type="text" className="input w-1/2" placeholder="Last name" />
                            </div>
                            <div>
                                <input type="text" className="input w-full" placeholder="Company name" />
                            </div>
                            <div>
                                <input type="text" className="input w-full" placeholder="Email address" />
                            </div>
                            <div className="flex flex-row space-x-4">
                                <PhoneNumberSelect className="relative w-1/3" />
                                <input type="text" className="input w-2/3" placeholder="Phone number" />
                            </div>
                            <button type="submit" className="button--primary w-full">
                                Book demo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default BookSection;
