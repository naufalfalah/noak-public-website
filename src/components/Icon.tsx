import React from "react";
import Image from "next/image";

type IconProps = {
    name: string;
    width?: number;
    height?: number;
};

const Icon = ({ name, width = 24, height = 24 }: IconProps) => {
    const icons: Record<string, string> = {
        frame: "/icons/Frame.svg",
        frame_1: "/icons/Frame-1.svg",
        frame_2: "/icons/Frame-2.svg",
        frame_3: "/icons/Frame-3.svg",
        frame_4: "/icons/Frame-4.svg",
        frame_5: "/icons/Frame-5.svg",
        frame_6: "/icons/Frame-6.svg",
        frame_7: "/icons/Frame-7.svg",
        frame_8: "/icons/Frame-8.svg",
        frame_9: "/icons/Frame-9.svg",
        frame_10: "/icons/Frame-10.svg",
        frame_11: "/icons/Frame-11.svg",
        frame_12: "/icons/Frame-12.svg",
        frame_13: "/icons/Frame-13.svg",
        frame_14: "/icons/Frame-14.svg",
        frame_15: "/icons/Frame-15.svg",
        frame_16: "/icons/Frame-16.svg",
        frame_17: "/icons/Frame-17.svg",
        frame_18: "/icons/Frame-18.svg",
        frame_19: "/icons/Frame-19.svg",
        frame_20: "/icons/Frame-20.svg",
        frame_21: "/icons/Frame-21.svg",
    };

    return <Image src={icons[name]} alt={name} width={width} height={height} />;
};

export default Icon;
