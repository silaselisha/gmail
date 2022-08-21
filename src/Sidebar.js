import React from 'react'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CreateIcon from '@mui/icons-material/Create'
import InboxIcon from '@mui/icons-material/Inbox'
import AddIcon from '@mui/icons-material/Add'
import SidebarOption from './SidebarOption'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LabelIcon from '@mui/icons-material/Label'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Button startIcon={<CreateIcon fontSize={'large'}/>} className='sidebar__compose'>
            Compose
        </Button>
        <SidebarOption title={'Inbox'} Icon={InboxIcon} number={341} active={true} />
        <SidebarOption title={'Starred'} Icon={StarBorderIcon} number={84} />
        <SidebarOption title={'Snoozed'} Icon={AccessTimeIcon} />
        <SidebarOption title={'Sent'} Icon={SendIcon} />
        <SidebarOption title={'Drafts'} Icon={InsertDriveFileIcon} />
        <SidebarOption title={'More'} Icon={KeyboardArrowDownIcon}/>

        <div className='sidebarFooter'>
            <div className='sidebarFooter__label'>
                <h2>Labels</h2>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
            <div className='sidebarFooter__icons'>
                  <SidebarOption title={'[Imap]/Drafts'} Icon={LabelIcon} Morevert={MoreVertIcon}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar