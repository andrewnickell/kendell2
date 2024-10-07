import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Video failed to load within timeout")
      }
    }, 5000) // 5 second timeout

    return () => clearTimeout(timer)
  }, [videoLoaded])

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Landscaping background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-10 hero-video">
        <iframe
          src="https://www.youtube.com/embed/Bcu3L4ceuoY?autoplay=1&mute=1&controls=0&loop=1&playlist=Bcu3L4ceuoY"
          title="Landscaping Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setVideoLoaded(true)}
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black opacity-60 z-20"></div>
      <div className="relative z-30 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down leading-tight">
          Full-Service Professional<br />Landscaping & Lawn Care
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up">
          Bringing beauty back to your functional yard space in Southern Idaho!
        </p>
        <p className="text-lg mb-8 animate-fade-in-up">
          If you're unsatisfied with anything, we will come back and fix it for free.
        </p>
        <a
          href="tel:208-221-4199"
          className="btn btn-primary text-lg animate-bounce inline-block"
        >
          Call 208-221-4199
        </a>
      </div>
    </section>
  )
}

export default Hero