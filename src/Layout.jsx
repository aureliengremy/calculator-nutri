import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const MenuItems = [
        {
            href: '/',
            title: 'Home',
        },
        {
            href: 'about',
            title: 'About',
        },
        {
            href: 'form',
            title: 'Form',
        }
    ];
  return (
    
      <div className='min-h-screen flex flex-col'>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <header className='bg-gray-200 text-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
                Cloudinary Actions
            </header>
            <div className='flex flex-col md:flex-row flex-1'>
                <aside className='bg-gray-100 w-full md:w-60'>
                    <nav>
                        <ul>
                            {MenuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link to={href} >
                                        <p className={'text-black'}>{title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className={'flex-1'}>
                    {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
                    <Outlet />
                </main>
            </div>
        </div>
  )
}

export default Layout

