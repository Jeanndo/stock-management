import React from 'react'
import CustomerProducts from './userTable'
import Navigation from './Navbar'
import Payment from './payments'
const Client =()=>{

    return (
        <div>
            <Navigation/>
            <br/> <br/> <br/>
            <Payment/>
            <br/> <br/> <br/> <br/>
            <CustomerProducts/>
            </div>
    )
}

export default Client