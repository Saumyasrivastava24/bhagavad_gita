import React from 'react'

const Quotes = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-4'>Quotes</h1>
        <div className='flex flex-col items-center'>
            <div className='bg-white rounded-lg shadow-lg p-4 w-1/2 my-4'>
            <p className='text-lg font-semibold'>“The greatest glory in living lies not in never falling, but in rising every time we fall.”</p>
            <p className='text-sm font-semibold text-right'>- Nelson Mandela</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 w-1/2 my-4'>
            <p className='text-lg font-semibold'>“The way to get started is to quit talking and begin doing.”</p>
            <p className='text-sm font-semibold text-right'>- Walt Disney</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 w-1/2 my-4'>
            <p className='text-lg font-semibold'>“Your time is limited, so don't waste it living someone else's life.”</p>
            <p className='text-sm font-semibold text-right'>- Steve Jobs</p>
            </div>
        </div>
    </div>
  )
}

export default Quotes