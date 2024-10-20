import React from 'react'
import CounterBox from './CounterBox'

const Counterdetail = () => {
  return (
    <section className='py-4 w-full flex items-center'>
      <div className="flex w-full rounded-lg overflow-hidden">
        <CounterBox target={547} label="Registered Riders" colored={true} />
        <CounterBox target={3275} label="Orders Delivered" />
        <CounterBox target={289} label="Restaurants Partnered" />
        <CounterBox target={1563} label="Food items" />
      </div>
    </section>
  )
}

export default Counterdetail
