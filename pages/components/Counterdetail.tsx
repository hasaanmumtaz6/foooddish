import React from 'react'
import CounterBox from './CounterBox'

const Counterdetail = () => {
  return (
    <section className='py-6 w-full flex items-center'>
      <div className="flex w-full p-4 bg-[var(--background-primary)] rounded-lg overflow-hidden">
        <CounterBox borderClass="border-r-[1px] border-r-[#f0f786]" target={547} label="Registered Riders" />
        <CounterBox borderClass="border-r-[1px] border-r-[#f0f786]" target={3275} label="Orders Delivered" />
        <CounterBox borderClass="border-r-[1px] border-r-[#f0f786]" target={289} label="Restaurants Partnered" />
        <CounterBox borderClass="border-r-0" target={1563} label="Food items" />
      </div>
    </section>
  )
}

export default Counterdetail
