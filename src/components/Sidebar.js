import React from 'react'
import { useGlobalContext } from '../context/context'
import { links } from '../utils/links'
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <div className={`${isSidebarOpen ? 'sidebar-overlay show-sidebar' : 'sidebar-overlay'}`} onClick={closeSidebar}>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>

                <ul className='sidebar-menu-items'>
                    {links.map((oneLink) => {
                        const { id, url, text } = oneLink
                        return (
                            <li key={id} onClick={closeSidebar}><a href={url}>{text}</a></li>
                        )
                    })}

                </ul>
            </aside>
        </div>

    )
}
export default Sidebar