import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Kendell Landscaping Team"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">About Kendell Landscaping</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Based in Southern Idaho, Kendell Landscaping has been transforming outdoor spaces since 2015. Our team of experienced professionals is dedicated to creating and maintaining beautiful landscapes that exceed our clients' expectations.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Aesthetics are our passion, and we take satisfaction in leaving spaces better than we found them. We provide quality work at affordable prices, building strong relationships with our customers.
            </p>
            <p className="text-gray-700 text-lg">
              Landscaping creates lasting impressions, and we're here to make your home a showcase! If you need something done that's not listed in our services, call us anyway, and we'll see what we can do!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About