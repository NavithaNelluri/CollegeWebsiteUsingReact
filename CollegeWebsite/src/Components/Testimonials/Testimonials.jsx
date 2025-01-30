import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import User_1 from '../../assets/User-1.png'
import User_2 from '../../assets/User-2.png'
import User_3 from '../../assets/User-3.png'
import User_4 from '../../assets/USer-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const SlideForward = () => {
        if(tx > -50) {
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const SlideBackward = () => {
        if(tx < 0) {
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

  return (
    <div className='testimonials'> 
        <img src={next_icon} alt="" className='next-btn' onClick={SlideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={SlideBackward}/>
        <div className='Slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_1} alt="" />
                            <div>
                                <h3>Emily JAckson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_2} alt="" />
                            <div>
                                <h3>William JAckson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_3} alt="" />
                            <div>
                                <h3>Emily William</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_4} alt="" />
                            <div>
                                <h3>William JAckson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials