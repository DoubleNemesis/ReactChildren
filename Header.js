import React from 'react'

function Header({children, ...restProps}) {
    return (
        <>
            <div className="header">
                <h1>{restProps.title}</h1>
                {children}
            </div>
        </>
    )
}


export default Header