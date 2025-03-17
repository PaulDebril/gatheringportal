import React from 'react'

interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="flex w-2/5 flex-col items-center text-white pb-4">
      <h1 className="text-center text-3xl" style={{ fontFamily: 'Beleren' }}>
        {text}
      </h1>
      <div className="w-full h-[3px] flex-shrink-0 bg-gradient-to-r from-[rgba(229,186,51,0.20)] via-[#c49a0d] to-[rgba(229,186,51,0.20)] mt-4"></div>
    </div>
  )
}

export default Title
