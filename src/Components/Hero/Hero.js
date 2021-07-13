import React from "react";
import Clouds from './Clouds'

const Hero = () => (
    <div className={'bg-blue-300 h-screen w-screen flex flex-col justify-center items-center overflow-hidden'}>
        <Clouds />
        <div className={'z-50 flex flex-col justify-center items-center text-3xl'}>
            <h1>Hello, I'm <strong className={'text-orange-500'}>Gerell Troche</strong></h1>
            <h1 className={'mb-6'}>I'm a web developer.</h1>
            <button
                className="transition bg-blue-500 hover:bg-blue-400 text-gray-50 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-white rounded">
                <div className={''}>my work</div>
            </button>
        </div>
    </div>
)

export default Hero;