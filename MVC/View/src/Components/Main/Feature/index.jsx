import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { PiArmchairBold } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";

import './Feature.css'
function Navbar() {
  return (
    <div>
      <div className="feature">

        <div className="f-card fc1">
        <div className="fc-icon">
        <FaRegHandshake />
        </div>
        <h4>Amazing Deals</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>
        <div className="f-card fc2">
        <div className="fc-icon">
        <FaKitchenSet />
        </div>
        <h4>Quality Furniture</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>
        <div className="f-card fc3">
        <div className="fc-icon">
        <PiArmchairBold />
        </div>
        <h4>Modern Design</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>
        <div className="f-card fc4">
        <div className="fc-icon">
        <MdSupportAgent />
        </div>
        <h4>Best Support</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
