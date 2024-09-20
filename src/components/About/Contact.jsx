import React from 'react';

const Contact = () => {
  return (
    <div className="px-2 sm:px-8 md:px-20 py-8 font-poppins">
      <h1 className="text-3xl font-bold mb-6 text-gray-700 sm:text-4xl">Contact Us</h1>

      <p className="mb-4">
        If you want your mess to be featured on our platform, please visit the link below, 
        log in, and upload your mess details:
      </p>

      <a href='admin-panel'target='_blank'
        className="text-blue-600 underline hover:text-blue-800 mb-6 inline-block"
      >
        Register Your Mess
      </a>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
        <p className="text-gray-700">123 Mess Street, South City, YourTown, 123456</p>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
        <a 
          href="mailto:support@messm.com" 
          className="text-blue-600 underline hover:text-blue-800"
        >
          support@messm.com
        </a>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <ul className="list-none space-y-2">
          <li>
            <a 
              href="https://facebook.com/messm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Facebook
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com/messm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Twitter
            </a>
          </li>
          <li>
            <a 
              href="https://instagram.com/messm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
