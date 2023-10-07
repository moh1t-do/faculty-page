import React, { useState } from 'react'
import "./TabSwitcher.css"
import Pending from '../Pending/Pending'
import Approved from '../Approved/Approved'
import Rejected from '../Rejected/Rejected'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

function TabSwitcher() {

  const [tab, setTab]=useState(1);
  console.log(tab);
  return (
    <div className="first">
      <div class="content">
        <h2 class="text-center">Approval Page</h2>
        <div class="carousel-nav">
          <a href="#" className={tab===1?"col active":"col"} onClick={() => setTab(1)}>
            <FontAwesomeIcon className='tab-icon' icon={faHourglassHalf} />
            Pending
          </a>
          <a href="#" className={tab===2?"col active active2":"col"} onClick={() => setTab(2)}>
            <FontAwesomeIcon className='tab-icon' icon={faCircleCheck} />
            Approved
          </a>
          <a href="#" className={tab===3?"col active active3":"col"} onClick={() => setTab(3)}>
            <FontAwesomeIcon className='tab-icon' icon={faCircleXmark} />
            Rejected
          </a>
        </div>
        <div>
          {tab===1 && <Pending/>}
          {tab===2 && <Approved/>}
          {tab===3 && <Rejected/>}
        </div>
      </div>
    </div>
  )
}

export default TabSwitcher
