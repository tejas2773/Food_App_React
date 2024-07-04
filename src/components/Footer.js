import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2">123 Food St, Delicious City</p>
            <p>Email: info@foodapp.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="mt-2 flex justify-center">
              <a href="#" className="mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-2xl font-bold">About FoodApp</h2>
            <p className="mt-2">Your favorite meals, delivered fast.</p>
            <p>&copy; 2024 FoodApp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
