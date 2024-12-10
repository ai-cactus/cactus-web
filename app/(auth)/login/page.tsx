import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div>
            <Image src={'/Logo-Light.png'} alt='cactus ai' width={210} height={60} />
            <h2>Log in to your account</h2>
            <p>Welcome back! Please enter your details</p>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='eg. johnfrans@gmail.com' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='••••••' />
                </div>
            </form>
        </div>
    )
}

export default page