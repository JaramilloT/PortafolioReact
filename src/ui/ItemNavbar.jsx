import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = () => {
  return (
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Skills'>Skills</NavLink></li>
    </>
    )
}