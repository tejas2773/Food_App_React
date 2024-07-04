import React from 'react'

import Footer from './Footer'

function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">Discover our journey and what makes us special.</p>
      </header>

      <section className="my-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-7">
            Welcome to our food ordering app! We are passionate about bringing delicious meals to your doorstep. Our journey began with a simple idea - to make quality food accessible to everyone, everywhere. Our team works tirelessly to ensure that every order is prepared with love and care.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default About