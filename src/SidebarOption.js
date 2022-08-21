import React from 'react'
import IconButton from '@mui/material/IconButton'

import './SidebarOption.css'

const SidebarOption = ({ title, Icon, number, active, Morevert}) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
        {Morevert &&
        <IconButton size='small'>
            <Morevert fontSize='small' />
        </IconButton>}
    </div>
  )
}

export default SidebarOption