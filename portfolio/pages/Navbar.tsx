import React from 'react'

import { Wrapper, Link } from './Navbar.styles'

export const Navbar = () => {
    const items = ["About", "Portfolio", "Experience", "Resume"];
    return <Wrapper>
            {items.map(item => {
                return (
                    <Link key={item}>
                        {item}
                    </Link>
                )
            })}
            </Wrapper>
}
