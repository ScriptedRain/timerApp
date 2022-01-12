import React from 'react'
import { Card1 } from '../Components/Cards'
import Pattern from '../Components/Pattern'

const About = () => {
  return (
    // <div className=" bg-gray-800 2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
    //     <div className="flex flex-col lg:flex-row justify-between gap-8">
    //         <div className="w-full lg:w-5/12 flex flex-col justify-center pb-48">
    //             <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
    //             <p className="font-normal text-base leading-6 text-gray-400 ">This is an application made by developers who are trying to create an app that is simplified for the user whilst it provides all the important features with an option to see all the new features but its an optional so you can have all the key features without being hassled by new upcoming features.</p>
    //         </div>
    //         <div className="w-full lg:w-8/12 ">
    //             <img className="w-full h-full" src="https://cdn.vox-cdn.com/thumbor/ZtuTAA_h95ICMjg2qfre8vRfT1E=/0x0:2379x1974/1200x800/filters:focal(928x239:1308x619)/cdn.vox-cdn.com/uploads/chorus_image/image/67760845/AP19038765823578.0.jpg" alt="A group of People" />
    //         </div>
    //     </div>

    //     <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
    //         <div className="w-full lg:w-5/12 flex flex-col justify-center pt-12">
    //             <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Why we did this?</h1>
    //             <p className="font-normal text-base leading-6 text-gray-400 ">We wanted to create an app that can be used instead of three different applications. We have had enough of having to change everytime we want to add a task to a list or schedule an event in our calendar or even set a timer. Thats why we created this web-app, so you won't have to go the effort of using three different PRE-INSTALLED APPLICATIONS ON YOUR IPHONES. YOU LAZY PEOPLE.</p>
    //         </div>
    //         <div className="w-full lg:w-8/12 lg:pt-8">
    //             <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
    //                 <div className="p-4 pb-6 flex justify-center flex-col items-center">
    //                     <img className="md:block hidden" src="https://celebslifereel.com/wp-content/uploads/2020/03/Brooke-Monk.jpg" alt="Rain featured Img" />
    //                     <img className="md:hidden block" src="https://celebslifereel.com/wp-content/uploads/2020/03/Brooke-Monk.jpg" alt="Rain featured Img" />
    //                     <p className="font-medium text-xl leading-5 text-white mt-4">Rain</p>
    //                 </div>
    //                 <div className="p-4 pb-6 flex justify-center flex-col items-center">
    //                     <img className="md:block hidden" src="https://www.thefamouspeople.com/profiles/images/emma-brooks-mcallister-120292-1.jpg" alt="GhostReaper46 featured Img" />
    //                     <img className="md:hidden block" src="https://www.thefamouspeople.com/profiles/images/emma-brooks-mcallister-120292-1.jpg" alt="GhostReaper46 featured Img" />
    //                     <p className="font-medium text-xl leading-5 text-white mt-4">GhostReaper46</p>
    //                 </div>
    //                 <div className="p-4 pb-6 flex justify-center flex-col items-center">
    //                     <img className="md:block hidden" src="https://cdn.allfamous.org/people/avatars/erika-costell-musx-allfamous.org.jpg" alt="Krishp058 featued Img" />
    //                     <img className="md:hidden block" src="https://cdn.allfamous.org/people/avatars/erika-costell-musx-allfamous.org.jpg" alt="Krishp058 featued Img" />
    //                     <p className="font-medium text-xl leading-5 text-white mt-4">Krishp058</p>
    //                 </div>
    //                 <div className="p-4 pb-6 flex justify-center flex-col items-center">
    //                     <img className="md:block hidden" src="https://img.republicworld.com/republic-prod/stories/images/15898683605ec37748871a0.jpg" alt="BlazEXE Fire featured img" />
    //                     <img className="md:hidden block" src="https://img.republicworld.com/republic-prod/stories/images/15898683605ec37748871a0.jpg" alt="BlazEXE Fire featured img" />
    //                     <p className="font-medium text-xl leading-5 text-white mt-4">BlazEXE Fire</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <Pattern>
      <div className='  2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 sm:h-screen py-9 px-4'>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='w-full lg:w-5/12 flex flex-col justify-center pb-48'>
            <h1 className='text-3xl lg:text-4xl font-bold leading-9 text-white pb-4'>
              About Us
            </h1>
            <p className='font-normal text-base leading-6 text-gray-400 '>
              This is an application made by developers who are trying to create
              an app that is simplified for the user whilst it provides all the
              important features with an option to see all the new features but
              its an optional so you can have all the key features without being
              hassled by new upcoming features.
            </p>
          </div>
          <div className='w-full lg:w-8/12 '>
            <img
              className='w-full h-full rounded-lg'
              src='https://cdn.vox-cdn.com/thumbor/ZtuTAA_h95ICMjg2qfre8vRfT1E=/0x0:2379x1974/1200x800/filters:focal(928x239:1308x619)/cdn.vox-cdn.com/uploads/chorus_image/image/67760845/AP19038765823578.0.jpg'
              alt='A group of People'
            />
          </div>
        </div>

        <div className='flex lg:flex-row flex-col justify-between gap-8 pt-12'>
          <div className='w-full lg:w-5/12 flex flex-col justify-center pt-12'>
            <h1 className='text-3xl lg:text-4xl font-bold leading-9 text-white pb-4'>
              Why we did this?
            </h1>
            <p className='font-normal text-base leading-6 text-gray-400 '>
              We wanted to create an app that can be used instead of three
              different applications. We have had enough of having to change
              everytime we want to add a task to a list or schedule an event in
              our calendar or even set a timer. Thats why we created this
              web-app, so you won't have to go the effort of using three
              different PRE-INSTALLED APPLICATIONS ON YOUR IPHONES. YOU LAZY
              PEOPLE.
            </p>
          </div>
          <div className='w-full lg:w-8/12 lg:pt-8'>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:space-x-4 md:space-x-4 sm:space-x-4 rounded-md'>
              <Card1
                name={'Rain'}
                color={
                  'max-w-xs mx-auto overflow-hidden bg-red-400 rounded-lg shadow-lg shadow-red-500/50'
                }
                task={'Head Developer'}
                img={
                  'https://celebslifereel.com/wp-content/uploads/2020/03/Brooke-Monk.jpg'
                }
              />
              <Card1
                name={'GhostReaper46'}
                color={
                  'max-w-xs mx-auto overflow-hidden bg-blue-400 rounded-lg shadow-lg shadow-blue-500/50'
                }
                task={'Resource manager / developer'}
                img={
                  'https://www.thefamouspeople.com/profiles/images/emma-brooks-mcallister-120292-1.jpg'
                }
              />
              <Card1
                name={'Krishp058'}
                color={
                  'max-w-xs mx-auto overflow-hidden bg-green-400 rounded-lg shadow-lg shadow-green-500/50'
                }
                task={'Developer'}
                img={
                  'https://cdn.allfamous.org/people/avatars/erika-costell-musx-allfamous.org.jpg'
                }
              />
              <Card1
                name={'BlazEXE Fire'}
                color={
                  'max-w-xs mx-auto overflow-hidden bg-yellow-400 rounded-lg shadow-lg shadow-yellow-500/50'
                }
                task={'Invester & accountant'}
                img={
                  'https://img.republicworld.com/republic-prod/stories/images/15898683605ec37748871a0.jpg'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Pattern>
  )
}

export default About
