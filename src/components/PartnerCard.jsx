import React from "react";

const PartnerCard = ({ icon, name }) => {
    return (
        <div
            className="relative group h-[110px] w-full overflow-hidden"

        >

            <img
                src="/Dot2.png"
                alt=""
                className="absolute inset-0 h-full w-full object-fill pointer-events-none"
            />


            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">

                <img
                    src={icon}
                    alt={name}
                    className="w-10 object-contain"
                />

                <h3 className="text-white text-sm md:text-base font-medium">
                    {name}
                </h3>

            </div>
        </div>
    );
};

export default PartnerCard;