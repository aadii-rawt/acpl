import React from 'react'

const Capsule = ({title}) => {
  return (
     <span className="inline-flex rounded-full bg-gradient-to-r from-[#6D0005] to-[#D3000A] px-6 py-2 text-sm font-semibold text-white">
            {title}
          </span>
  )
}

export default Capsule