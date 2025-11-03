
import React from 'react'

function PrimaryButton(props) {

    const {children , onAnand} =props
  return (
    <>
    <button onClick={onAnand} className='bg-red-500 w-[180PX] text-white'>
        {children}
    </button>
    </>
  )
}

export default PrimaryButton