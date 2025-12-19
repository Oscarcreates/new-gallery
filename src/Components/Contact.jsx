import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shoot_type: '',
    other_shoot_type: '',
    shoot_date: '',
    message: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formData.terms) {
      setMessage({ 
        text: 'Please agree to the terms and conditions', 
        type: 'error' 
      });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    
    const SERVICE_ID = 'service_vxw9ltj';
    const TEMPLATE_ID = 'template_06lkx9u';
    const PUBLIC_KEY = '-gBOVOwUnv2FheK0o';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      shoot_type: formData.shoot_type,
      other_shoot_type: formData.other_shoot_type,
      shoot_date: formData.shoot_date,
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setMessage({ 
          text: 'Your message has been sent successfully! We\'ll get back to you soon.', 
          type: 'success' 
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          shoot_type: '',
          other_shoot_type: '',
          shoot_date: '',
          message: '',
          terms: false
        });
        setLoading(false);
      }, (error) => {
        console.log('FAILED...', error.text);
        setMessage({ 
          text: 'Failed to send message. Please try again or contact us directly.', 
          type: 'error' 
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <div className='flex items-center flex-col my-8 md:w-full w-[300px] mx-auto md:mx-0 text-center'>
        <h1 className='font-medium md:text-3xl text-2xl py-3'>GET IN TOUCH</h1>
        <p>Have a question or project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
      </div>
      
      <div className='md:flex md:grid-cols-3 md:justify-around grid-col-1 md:w-[1300px] mx-auto'>
        <div className='flex flex-col items-center'>
          <MdEmail size={50} className='text-red-500' />
          <h1 className='text-amber-800 font-medium py-2 text-2xl'>Company Email</h1>
          <p>cistystudio@gmail.com </p>
        </div>

        <div className='text-white p-6  bg-red-500 md:w-[300px] flex flex-col items-center text-center w-[300px] mx-auto md:mx-0 my-6 md:my-0'>
          <IoLocationOutline size={50} />
          <h1 className='font-medium py-2 text-2xl'>Office Location</h1>
          <p>Otumbadi plaza , Beside Ten Naira junction , IMSU front Gate , Owerri imo state .</p>
        </div>

        <div className='flex flex-col items-center'>
          <FaPhoneAlt size={50} className='text-red-500' />
          <h1 className='text-amber-800 font-medium py-2 text-2xl'>Office Phone Number</h1>
          <p>+234 803 816 3489</p>
          <p>+234 808 204 2447</p>
                    
        </div>
      </div>

      <div className='max-w-4xl mx-auto my-12 p-6'>
        <div className='space-y-6'>
          <div>
            <label className='block mb-2 text-lg'>
              Full Name <span className='text-red-500'>*</span>
            </label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500'
              required
            />
          </div>

          <div>
            <label className='block mb-2 text-lg'>
              Email Address <span className='text-red-500'>*</span>
            </label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500'
              required
            />
          </div>

          <div>
            <label className='block mb-2 text-lg'>
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500'
              required
            />
          </div>

          <div>
            <label className='block mb-2 text-lg'>
              Type Of Shoot
            </label>
            <select 
              name="shoot_type"
              value={formData.shoot_type}
              onChange={handleChange}
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-gray-700'
            >
              <option value="">Please select your type of shoot</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait</option>
              <option value="corporate">Corporate</option>
              <option value="event">Event</option>
              <option value="product">Product</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className='block mb-2 text-lg'>
              If You Selected Others Above
            </label>
            <input 
              type="text"
              name="other_shoot_type"
              value={formData.other_shoot_type}
              onChange={handleChange}
              placeholder='Please list any other type of shoot you may want'
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 placeholder-gray-300'
            />
          </div>

          <div>
            <label className='block mb-2 text-lg'>
              Shoot Date
            </label>
            <input 
              type="date"
              name="shoot_date"
              value={formData.shoot_date}
              onChange={handleChange}
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500'
            />
          </div>

          <div>
            <label className='block mb-2 text-lg'>
              Additional Note
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Leave us a message'
              rows="6"
              className='w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 placeholder-gray-300 resize-none'
            />
          </div>

          <div className='flex items-start gap-3'>
            <input 
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              id="terms"
              className='mt-1 w-5 h-5 cursor-pointer'
            />
            <label htmlFor="terms" className='text-base cursor-pointer'>
              By clicking book now, you agree to our{' '}
              <a href="#" className='text-red-500 hover:underline'>terms of use</a>
              {' '}and{' '}
              <a href="#" className='text-red-500 hover:underline'>privacy policy</a>
            </label>
          </div>

          {message.text && (
            <div className={`p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <button 
            onClick={sendEmail}
            disabled={loading}
            className='w-full bg-red-500 text-white py-4 rounded-lg font-medium text-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
          >
            {loading ? 'Sending...' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact