import React from 'react'

const LeftNavitems = ({text,icon,action,className}) => {
  return (
    <div className={
        className+
        'text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]'
    }
    onClick={action}>
      <span className='text-xl mr-5'>{icon} </span>
      {text}
    </div>
  )
}

export default LeftNavitems
