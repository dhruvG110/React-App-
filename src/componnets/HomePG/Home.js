import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import MidSection from '../HeroSection/MidSection'
import Navbar from '../../Navbar'
import Footer from '../Footer'
import './Home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
     <MidSection/>
     <section id="works" class=" w-full bg-neutral-950">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2>
            <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
                Our AI solution will help you from start to finish
            </p>
        </div>
        <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
            </div>
            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div
                        class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700">1</span>
                    </div>
                    <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">Select template</h3>
                    <p class="mt-4 text-base text-gray-400 md:text-lg">
                        Select template accourding to your requirement
                    </p>
                </div>
                <div>
                    <div
                        class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700">2</span>
                    </div>
                    <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Enter Your Details</h3>
                    <p class="mt-4 text-base text-gray-400 md:text-lg">
                        Put in your personalized details and let the AI do the rest.
                    </p>
                </div>
                <div>
                    <div
                        class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700">3</span>
                    </div>
                    <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Publish it</h3>
                    <p class="mt-4 text-base text-gray-400 md:text-lg">
                        Use output as you like
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
       >
    </div>
</section>
     <Footer/>
</>

  )
}

export default Home
