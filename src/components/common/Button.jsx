import React from 'react'

function Button({ text, className }) {
  return (
      <button className={`font-poppins font-semibold text-base leading-150 tracking-normal rounded-[55px] cursor-pointer transition-all duration-300 ${className}`}>
          {text}
    </button>
  )
}

export default Button