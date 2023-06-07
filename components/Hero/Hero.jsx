import React from 'react'

function Hero() {
  return (
    <div class="lg:h-[38rem] mx-auto flex max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
        <div class="mt-10 lg:max-w-lg">
            {/* <p class="mb-4">— Creative Design</p> */}
            <h1 class="font-[900] text-3xl text-gray-900 lg:text-5xl lg:leading-snug">Empowering E-commerce Growth with Digital Banking Solutions</h1>

            <div class="mt-8 space-y-5 text-gray-600">We believe in empowering our customers by offering a range of innovative solutions and personalized guidance that enable you to explore new opportunities, grow your wealth, and ultimately succeed in reaching your financial goals. With our comprehensive suite of services, expert advice, and a customer-centric approach, we are dedicated to being your trusted partner throughout your entire financial journey. Together, we can discover new possibilities, foster growth, and celebrate your achievements as you pave the path to a prosperous future. </div>
        </div>

        <div class="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
            <form class="flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter your email address" class="m-1 h-12 flex-1 appearance-none rounded-lg border-none border-transparent bg-transparent bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:placeholder-transparent focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

            <button type="button" class="m-1 h-12  block rounded-xl bg-blue-600 font-medium text-white px-4 py-2 text-white transition-colors duration-200 focus:bg-blue-700 focus:outline-none hover:bg-blue-700">Connect with Us</button>
            </form>
        </div>
        </div>

        <div class="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
        <div class="absolute z-10 lg:left-0">
            <div class="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
            <img class="h-10 w-10 rounded-full object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="Simon Lewis" />
            <p class="ml-4 w-56">
                <strong class="block text-lg font-medium">Simon Lewis</strong>
                <span class="text-xs text-gray-400"> Has been our client for 4 years </span>
            </p>
            </div>
            <div class="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
            <strong class="block text-lg font-medium">Site Analytics</strong>
            <div class="mt-4 flex items-center text-xs text-gray-400">
                Impressions
                <div class="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                <div class="h-full w-3/5 bg-yellow-200"></div>
                </div>
            </div>

            <div class="mt-4 flex items-center text-xs text-gray-400">
                Engagement
                <div class="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                <div class="h-full w-2/5 bg-gray-800"></div>
                </div>
            </div>
            </div>
        </div>

        <img class="-scale-x-100 mt-auto ml-auto h-4/6 object-cover lg:max-w-2xl" src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="glasses photo" />
        </div>
    </div>
  )
}

export default Hero