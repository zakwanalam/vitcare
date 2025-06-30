import React from 'react'

function Newsletter() {
    return (
        <div className="bg-[#0F4B5D] py-20  text-white p-15 md:p-16 rounded-3xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Subscribe To Our NewsLetter
                </h2>
                <p className="text-sm md:text-base text-gray-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere neque dolorem totam officia quo perferendis aut iusto reprehenderit porro eius, iure suscipit dicta unde vero aspernatur expedita nesciunt excepturi eum?
                </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 space-y-3 w-full max-w-md">
                <h4 className="text-sm font-semibold">Stay up to date</h4>

                <div className="flex items-center gap-2 w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-full bg-accent text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                    <button className="px-5 py-2 rounded-full cursor-pointer bg-lime-400 hover:bg-lime-300 text-black font-medium transition">
                        Subscribe
                    </button>
                </div>

                <p className="text-xs text-gray-300">
                    By subscribing you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default Newsletter