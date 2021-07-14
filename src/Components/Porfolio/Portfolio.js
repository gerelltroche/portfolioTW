import React from "react";
import farmImg from '../../assets/images/FarmEasy.PNG'

const Portfolio = props => {
    //flex flex-col bg-yellow-50 pb-12 h-5/6 justify-start

    return (
        <div className={'flex flex-col bg-gray-700 pb-12 h-5/6 justify-start text-white'}>
            <div className={'place-self-center'}>
                <div className={'text-6xl mt-12 mb-0 select-none'}>Portfolio</div>
                <hr className={'self-center w-8 mb-10 border border-yellow-50 bg-yellow-50'}/>
            </div>
            <div className={'place-self-center'}>
                <div className={'flex text-thin pl-12 pr-12 max-w-2xl justify-center bg-yellow-50 rounded-xl text-black sm:mb-4'}>
                    <img src={farmImg} className={'h-60 justify-center place-self-center mt-6 mb-6 mr-4'}
                         alt={'FarmEasy Application Demo'}/>
                    <div className={'flex-col'}>
                        <h1 className={'text-4xl mb-3 mt-6'}>FarmEasy</h1>
                        <p className={'mb-6 sm:mb-2'}> The best tool for leveling farming in Osrs. I created this because it wasn't made yet.
                            I saw the problem and fixed it. This tool dynamically searches through all the items in the
                            game to give you the most optimal inventory possible.
                        </p>
                        <div className={'flex sm:flex-col'}>
                            <div>
                                <a href={'https://github.com/gerelltroche/osrs-farmeasy'}
                                   className={'bg-gray-700 hover:bg-gray-400 text-gray-50 font-bold py-2 px-4 border-b-4 ' +
                                   'mt-4 mr-2 border-gray-800 hover:border-gray-500 hover:text-white rounded sm:text-xs sm:mt-0'}
                                   target={'blank'} >Github</a>
                            </div>
                            <div className={'sm:mt-4 sm:mb-4'}>
                                <a href={'http://18.191.86.182:3000/'}
                                   className={'bg-gray-700 hover:bg-gray-400 text-gray-50 font-bold py-2 px-4 border-b-4 ' +
                                   'mt-4 border-gray-800 hover:border-gray-500 hover:text-white rounded sm:text-xs'}
                                   target={'blank'} >Live Version</a>
                            </div>

                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio