import React from 'react'
import { useEffect, useContext } from "react"
import { Context } from "../context/contextApi"

import Leftnav from './Leftnav'
const Feed = () => {

    return (
        <div className='flex flex-row h-[clac(100%-56px)]'>
            <Leftnav/>
        </div>
    )
}

export default Feed
