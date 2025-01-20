import React from 'react'
import './About.css'
import { FaPlay } from "react-icons/fa";

function index() {
  return (
    <div>
      <div className="about">
        <div className="about-cont">
            <h6>About Furnish</h6>
            <h3>Quality Makes the Belief for <br /> Customers</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts. Separated they live in <br /> Bookmarksgrove right at the coast of the Semantics, a large language <br /> ocean.</p>

            <div className="ac-btn">
                <button><FaPlay/></button> Watch Video
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
