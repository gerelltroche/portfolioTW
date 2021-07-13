import React from "react";

const Nav = props => {
    return (
        <div className={'pl-6 flex bg-gray-800 sticky top-0 shadow-md z-50 h-12'}>
            <a href={'/'} className={'text-2xl text-white hover:bg-gray-900 p-2 text-xs transition'}>HOME</a>
            <a href={'/'} className={'text-2xl text-white hover:bg-gray-900 p-2 text-xs transition '}>ABOUT</a>
            <a href={'/'} className={'text-2xl text-white hover:bg-gray-900 p-2 text-xs transition '}>PORTFOLIO</a>
            <a href={'/'} className={'text-2xl text-white hover:bg-gray-900 p-2 text-xs transition '}>CONTACT</a>
        </div>
    )
}

export default Nav