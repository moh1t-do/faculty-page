import React, { useState } from 'react'
import "./TabSwitcher.css"
import Pending from '../Pending/Pending'
import Approved from '../Approved/Approved'
import Rejected from '../Rejected/Rejected'

function TabSwitcher() {

  const [tab, setTab]=useState(1);
  console.log(tab);
  return (
    <div class="content">
        <h2 class="text-center">Approval Page</h2>
        <div class="carousel-nav">
          <a href="#" className={tab===1?"col active":"col"} onClick={() => setTab(1)}>Pending</a>
          <a href="#" className={tab===2?"col active":"col"} onClick={() => setTab(2)}>Approved</a>
          <a href="#" className={tab===3?"col active":"col"} onClick={() => setTab(3)}>Rejected</a>
        </div>
        <div>
          {tab===1 && <Pending/>}
          {tab===2 && <Approved/>}
          {tab===3 && <Rejected/>}
        </div>
    </div>
  )
}

export default TabSwitcher
