import React from 'react'
import { MdOutlineChevronRight } from "react-icons/md";

import './Info.css'
function index(props) {
  return (
    <div className='info'>
        <div className="info-txt">
            <h6>HOME<MdOutlineChevronRight/> {props.title} <MdOutlineChevronRight/></h6>
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}

export default index
