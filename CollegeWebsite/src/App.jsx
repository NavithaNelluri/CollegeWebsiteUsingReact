import React from 'react'
import Navbar from './Components/Navbar/NAvbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Ourprograms from './Components/Ourprograms/Ourprograms'
import Aboutus from './Components/AboutUs/Aboutus'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Ourprograms subTitle = 'Our Programs' title = 'What We Offer'/>
      <div className='container'>
        <Programs/>
      </div>
      <Aboutus/>
      <Ourprograms subTitle= 'Gallery' title= 'Campus Photos'/>
      <Campus/>
      <Ourprograms subTitle='Testimonials' title = 'What Student Says'/>
      <Testimonials/>
      <Ourprograms subTitle='Contact us' title = 'Get in Touch'/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App