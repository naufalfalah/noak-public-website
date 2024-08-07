"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import PhoneNumberSelect from "@/components/PhoneNumberSelect";

interface EmailData {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
}

const EmailForm: React.FC = () => {
    const defaultCountryCode = "+65";

    const [emailData, setEmailData] = useState<EmailData>({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        countryCode: defaultCountryCode,
        phoneNumber: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setEmailData({ ...emailData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const body = JSON.stringify({
                text: `Name: ${emailData.firstName} ${emailData.lastName}\nCompany: ${emailData.companyName}\nEmail: ${emailData.email}\nPhone: ${emailData.countryCode} ${emailData.phoneNumber}`,
                html: `html\nName: ${emailData.firstName} ${emailData.lastName}\nCompany: ${emailData.companyName}\nEmail: ${emailData.email}\nPhone: ${emailData.countryCode} ${emailData.phoneNumber}`,
            });

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
            });

            const result = await response.json();
            if (response.ok) {
                alert("Email sent successfully");
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error: any) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-row space-x-4">
                <input
                    type="text"
                    className="input w-1/2"
                    name="firstName"
                    placeholder="First name"
                    value={emailData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="input w-1/2"
                    name="lastName"
                    placeholder="Last name"
                    value={emailData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    className="input w-full"
                    name="companyName"
                    placeholder="Company name"
                    value={emailData.companyName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="email"
                    className="input w-full"
                    name="email"
                    placeholder="Email address"
                    value={emailData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-row space-x-4">
                <PhoneNumberSelect className="relative w-1/3" value={emailData.countryCode} onChange={handleChange} />
                <input
                    type="text"
                    className="input w-2/3"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={emailData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="button--primary w-full">
                Book demo
            </button>
        </form>
    );
};

export default EmailForm;
