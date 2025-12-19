import React from 'react'
import founder from '/assets/Founder.JPG'

const About = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className='bg-black w-full h-auto md:h-[250px] text-white text-center py-12 md:pt-[70px] px-4'>
            <h1 className='pt-4 md:pt-8 text-2xl md:text-4xl font-bold'>
                Who is Cisty Studios?
            </h1>
            <p className='mt-2'>Get to Know me Better</p>
        </div>

        <div className='flex flex-col md:flex-row md:grid-cols-2 justify-center items-center md:items-start max-w-[1400px] mx-auto'>
            <div className='w-full md:w-[600px] p-4 sm:p-6 md:p-[4rem]'>
                <img src="https://res.cloudinary.com/dquamrc0f/image/upload/w_1200,q_auto,f_auto/v1766131246/_TY_1131_Edit_odgdjn.jpg" alt="Founder" className='w-full h-auto rounded-lg shadow-lg' />
                <div className='text-center pt-4'>
                    <p className='font-bold text-2xl'>Godswill Izuchukwu Ogbonna</p>
                    <p>CEO Cisty Studios</p>
                </div>
                
            </div>

            <div className='w-full md:w-[700px] p-4 sm:p-6 md:p-[4rem]'>
                <h1 className='pb-4 text-xl md:text-2xl font-bold'>About Cisty Studios</h1>
                <p className='text-base leading-relaxed'>
                    Godswill Izuchukwu Ogbonna, CEO Cisty Studios is a Nigerian based creative specializing in cinematography, photography and high-end visual production. Over the years, it has evolved into a multi-disciplinary brand that blends film, beauty and artistry to deliver compelling visual experiences for clients across different industries.
                    
                    <div className='pt-4'>
                        The studio's journey was inspired by a passion for storytelling and a desire to create visuals that resonate deeply with audiences. What began as a focus on photography and filmmaking has grown into a full creative ecosystem. Today, Cisty Studios produces commercials, movies, documentaries and event coverage, combining technical precision with a strong artistic identity. Through its unique approach to lighting, composition and narrative direction, the studio has positioned itself as a trusted name in Nigeria's visual landscape.
                    </div>
                    
                    <div className='pt-4'>
                        Beyond film and photography, Cisty Studios has expanded into beauty, style and personal enhancement services. Its offerings include professional makeup, microblading, eyelash extensions, nail artistry and tattoo work. These services allow clients to embrace creativity, enhance their personal style and express individuality, while maintaining the same dedication to detail and craftsmanship that defines the studio's visual work.
                    </div>
                    
                    <div className='pt-4'>
                        Cisty Studios also works with both local and international clients, enabling the brand to engage with diverse cultures, industries and creative expressions.
                    </div>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About