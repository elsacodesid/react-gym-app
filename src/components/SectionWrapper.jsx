import React from 'react'

const SectionWrapper = ({children, header, title}) => {
  return (
    <section className="min-h-screen flex flex col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center item-center">
        <p>
          {header}
        </p>
        <h2>{title[0]} <span>{title[1]}</span> {title[2]}</h2>
      </div>
    </section>
  )
}

export default SectionWrapper