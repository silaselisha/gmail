import React from 'react'

import './Section.css'

const Section = ({ Icon, title, active, color }) => {
  return (
    <div className={`section ${active && 'section--selected'}`} style={{borderBottom: `1px solid ${active && color}`, color: `${active && color}`}}>
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default Section