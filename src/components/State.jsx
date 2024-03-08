import React from 'react'

const State = ({totalCount}) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center bg-white space-y-5 rounded shadow">
      <div className='text-2xl font-bold my-5'>Total-count: {totalCount}</div>
    </div>
  )
}

export default State
