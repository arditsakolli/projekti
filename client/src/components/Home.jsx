import React from 'react'
import NavigationBar from '../NavigationBar'
import video from '../assets/video.mp4'
import Footer from '../Footer'
function Home() {
  return (
    <div>
        <NavigationBar/>
        <div className='d-flex align-items-center justify-content-center main'>
            <h2  className='w-75 coolorr mb-5 paragraph-roboto'>Green Pathways</h2>

        </div>
        <div className='d-flex align-items-center justify-content-center bg-dark position-r'>
            <video muted autoPlay loop  src={video} className='d-flex'></video>
            <div className='position-a d-flex none'>
                <div className=' text-v containerr '>
                <p>Transitioning to a green economy is not without its challenges, but the benefits far outweigh the costs. By investing in sustainable technologies and infrastructure, we can create green jobs, spur innovation, enhance energy security, improve public health, and reduce inequalities. Moreover, embracing the green transition offers an opportunity to build more resilient and prosperous communities that thrive in harmony with nature.</p>
                </div>
                <div className=' text-v containerr '>
                <p>Ultimately, the green transition is more than just a transition to a cleaner, greener future; it is a transformational journey towards a world where humanity and the planet coexist in balance and harmony. It requires a collective commitment to sustainability, a willingness to challenge the status quo, and a shared vision of a better tomorrow.</p>
                </div>
             
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-5'>
            <div className='w-75 '>
                <div className=' paragraph-roboto borderBootom mb-5 pl-5 pr-5'>
                     <p>Introduction:
                   Welcome to Green Pathways, your destination for embracing the green transition and fostering a sustainable future for all. As our planet faces unprecedented environmental challenges, it's more important than ever to take action towards building a greener, healthier, and more equitable world.</p>
                </div>
               
                 <div className='borderBootom paragraph-roboto mb-5'>
                 <p>Our Vision and Mission:
                      At Green Pathways, we envision a future where sustainable practices are integrated into every aspect of society, fostering harmony between humans and the natural world. Our mission is to empower individuals, businesses, and communities to embrace the green transition and catalyze positive change through education, advocacy, and action.</p>

                 </div>
            </div>
        </div>
        <Footer/>
     
    </div>
  )
}

export default Home