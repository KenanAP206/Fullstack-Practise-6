import React from 'react'
import './Blog.css'
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";


function index() {
  return (
    <div>
      <section id='blog'>
        <div className="hadmer">
            <h6>Our Blog</h6>
            <h3>Recent From Blog</h3>
        </div>
        <div className="blog-cards">
            <div className="blog-card">
                <img alt="" srcset="https://preview.colorlib.com/theme/furnish/images/image_1.jpg.webp" />
                <div className="bc-txt">
                    <div className="bc-txt_info">
                        <p><FaUser/> ADMIN</p>
                        <p><FaCalendarAlt/> Jan. 27, 2021</p>
                        <h6><TbMessageCircleFilled/> 3</h6>
                    </div>
                    <h5>COMMENTS</h5>
                    <a href="">Shop the Look Cottage Country Living Room</a>
                    <p>A small river named Duden flows by their place.  </p>
                </div>
            </div>
            <div className="blog-card">
                <img alt="" srcset="https://preview.colorlib.com/theme/furnish/images/image_2.jpg.webp" />
                <div className="bc-txt">
                    <div className="bc-txt_info">
                        <p><FaUser/> ADMIN</p>
                        <p><FaCalendarAlt/> Jan. 27, 2021</p>
                        <h6><TbMessageCircleFilled/> 3</h6>
                    </div>
                    <h5>COMMENTS</h5>
                    <a href="">Shop the Look Cottage Country Living Room</a>
                    <p>A small river named Duden flows by their place.  </p>
                </div>
            </div>
            <div className="blog-card">
              
                <div className="bc-txt">
                    <div className="bc-txt_info">
                        <p><FaUser/> ADMIN</p>
                        <p><FaCalendarAlt/> Jan. 27, 2021</p>
                        <h6><TbMessageCircleFilled/> 3</h6>
                    </div>
                    <h5>COMMENTS</h5>
                    <a href="">Shop the Look Cottage Country Living Room</a>
                    <p>A small river named Duden flows by their place.  </p>
                </div>
                <img alt="" srcset="https://preview.colorlib.com/theme/furnish/images/image_3.jpg.webp" />
            </div>
                 <div className="blog-card">
                <div className="bc-txt">
                    <div className="bc-txt_info">
                        <p><FaUser/> ADMIN</p>
                        <p><FaCalendarAlt/> Jan. 27, 2021</p>
                        <h6><TbMessageCircleFilled/> 3</h6>
                    </div>
                    <h5>COMMENTS</h5>
                    <a href="">Shop the Look Cottage Country Living Room</a>
                    <p>A small river named Duden flows by their place.  </p>
                </div>
                <img alt="" srcset="https://preview.colorlib.com/theme/furnish/images/image_4.jpg.webp" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default index
