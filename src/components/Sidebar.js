import React from 'react'
import { useGlobalContext } from '../context/context'
import { links } from '../utils/links'
import * as Scroll from 'react-scroll'

let Link = Scroll.Link
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <div className={`${isSidebarOpen ? 'sidebar-overlay show-sidebar' : 'sidebar-overlay'}`} onClick={closeSidebar}>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>

                <ul className='sidebar-menu-items'>
                    {links.map((oneLink) => {
                        const { id, url, text } = oneLink
                        return (
                            <li key={id}>
                                <Link smooth={true} onClick={closeSidebar} to={url}>{text}</Link>
                            </li>
                        )
                    })}

                </ul>
            </aside>
        </div>

    )
}
export default Sidebar