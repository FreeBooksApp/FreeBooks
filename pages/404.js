import React from 'react'
import Image from 'next/image'

function NotFound() {
    return (
        <div className="notFound">
            <h1>oops! this page could not found</h1>
            <Image src="/images/notfound.png" width="400" height="300" alt="404"/>
        </div>
    )
}

export default NotFound;
