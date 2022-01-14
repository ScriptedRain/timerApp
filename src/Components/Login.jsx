// import React from 'react'
// import { useRef, useState } from 'react'

// import { FcGoogle } from 'react-icons/fc'
// import { auth as Authenticate } from '../firebase-config'
// import { signup, login, logout } from '../firebase-config'
// import { useAuth } from '../Contexts/UserContext'

// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// const Register = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { currentUser, login } = useAuth()

//   return (
//     <div className='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
//       <div className='max-w-sm rounded-lg bg-gray-800'>
//         <div className='p-5 text-center'>
//           <h2 className='text-2xl font-semibold text-white fo'></h2>

//           <form
//             onSubmit={async (e) => {
//               e.preventDefault()

//               login(email, password)
//                 .then((res) => console.log(res))
//                 .catch((err) => console.log(err.message))
//             }}
//           >
//             <div className='mt-4'>
//               <h1>{`the user is:  ${currentUser}`}</h1>
//               <input
//                 className='block w-full px-4 py-2 text-white placeholder-gray-500 border rounded-md bg-gray-800 border-gray-600  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='Email address'
//                 aria-label='Email address'
//               ></input>
//               <input
//                 className='block w-full px-4 py-2 mt-4 text-white placeholder-gray-500  border rounded-md bg-gray-800 border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder='Password'
//                 aria-label='Password'
//               ></input>
//             </div>
//             {/* <div className='flex space-x-2 my-2 '>
//               <button
//                 disabled={loading || currentUser != null}
//                 onClick={signInWithGoogle}
//                 className={
//                   ' disabled:opacity-50 disabled:cursor-not-allowed py-2 px-4 rounded inline-flex items-center font-medium tracking-wide text-white capitalize transition duration-200 transform bg-gray-900 hover:bg-gray-700 focus:ring-indigo-300 focus:ring-opacity-80 ease-in-out hover:scale-110 '
//                 }
//               >
//                 <FcGoogle className='w-full h-5 ' />
//               </button>
//             </div> */}

//             <div className='flex items-center justify-between mt-4'>
//               <button className=' disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
//                 Sign up
//               </button>
//             </div>
//             <div className='flex items-center mt-1'>
//               <button className=' disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 mt-2 font-semibold text-white transition-cxolors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
//                 Log out
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
