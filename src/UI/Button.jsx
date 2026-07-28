import React from 'react'

const Button = ({title, icon}) => {
    return (
        <button className="mt-10 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#E41F26] to-[#7E1115] px-6 py-3 font-semibold text-white transition hover:scale-105">
            {title}
            {icon}
        </button>
    )
}

export default Button