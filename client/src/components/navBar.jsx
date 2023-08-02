import React,{useState} from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { Button } from "@material-tailwind/react";
import { clearToken,selectIsloggedIn,selectUserType } from "../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Courses', href: '#', current: false },
    { name: 'Alumini', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
  ]
  export default function Navbar() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isLoggedIn=useSelector(selectIsloggedIn);
  const user=useSelector(selectUserType);
  const logout=()=>{
    console.log("logout called")
    const accessToken=localStorage.getItem("accessToken");
    const refreshToken=localStorage.getItem("refreshToken");

    dispatch(clearToken({accessToken,refreshToken,userType:'instructor'}));
    navigate('/')

  }
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
    <a href="#" className="-m-1.5 p-1.5">
  <p className="sr-only">Your Company</p>
  <img
    className="h-16 w-auto rounded-md"
    src="https://res.cloudinary.com/dzr02xhra/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1690902922/developnearn_ldlyhn.png" 
    alt=""
  />
  
    </a>
    </div>
    <div className="flex lg:hidden">
    <button
  type="button"
  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  onClick={() => setMobileMenuOpen(true)}
>
  <span className="sr-only">Open main menu</span>
  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
</button>
</div>
<div className="hidden lg:flex lg:gap-x-12">
{navigation.map((item) => (
  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
    {item.name}
  </a>
))}
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
{/* <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
  user <span aria-hidden="true">&rarr;</span>
</a> */}

</div>

{/* <a href="/login" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</a> */}

<a href="/login" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</a>

<button  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
onClick={logout}
>Logout</button>


</nav>
<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
<div className="fixed inset-0 z-50" />
<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
<div className="flex items-center justify-between">
  <a href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">Your Company</span>
    <img
      className="h-8 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt=""
    />
  </a>
  <button
    type="button"
    className="-m-2.5 rounded-md p-2.5 text-gray-700"
    onClick={() => setMobileMenuOpen(false)}
  >
    <span className="sr-only">Close menu</span>
    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  </button>
</div>
<div className="mt-6 flow-root">
  <div className="-my-6 divide-y divide-gray-500/10">
    <div className="space-y-2 py-6">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}
    </div>
    <div className="py-6">
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Log in
      </a>
    </div>
    
  </div>
</div>
</Dialog.Panel>
</Dialog>
</header>
  )
}
