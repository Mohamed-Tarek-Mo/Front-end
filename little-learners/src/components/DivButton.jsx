import React from 'react'

const DivButton = ({title}) => {
  return (
    <div className="flex flex-row w-[128px] h-auto md:h-[47px] rounded-[8px] border-2 border-[#262626] px-[20px] py-[10px] gap-[10px] sm:ml-[90px] shadow-[.5px_.5px_0_1px_#1E1E1E]">
          {title}
        </div>
  )
}

export default DivButton