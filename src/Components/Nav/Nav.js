import React from "react";

const Nav = props => {
    return (
        <div className={'pl-6 sm:pl-2 flex bg-gray-800 sticky top-0 shadow-md z-50 h-12'}>
            <a href={'#Home'} className={'text-2xl md:text-xl sm:text-lg text-white hover:bg-gray-900 p-2 transition'}>HOME</a>
            <a href={'#About'} className={'text-2xl md:text-xl sm:text-lg text-white hover:bg-gray-900 p-2 transition '}>ABOUT</a>
            <a href={'#Portfolio'} className={'text-2xl md:text-xl sm:text-lg text-white hover:bg-gray-900 p-2 transition '}>PORTFOLIO</a>
            <a href={'#Contact'} className={'text-2xl md:text-xl sm:text-lg text-white hover:bg-gray-900 p-2 transition '}>CONTACT</a>
        </div>
    )
}

export default Nav