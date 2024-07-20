import React, {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../components/SidebarMenu";
import { SearchForm } from "../components/SearchForm";
import Orders from "../components/Orders";

export function Dashboard () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState({
        name: 'Usuario Ejemplo',
        email: 'usuario@example.com',
        avatar: 'https://via.placeholder.com/150',
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    

    return(
        <>
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                ☰
            </button>
            {user && <Sidebar user={user} isOpen={isSidebarOpen} onClose={toggleSidebar} />}
            <section className=" flex flex-col justify-center items-center gap-4">
                <SearchForm />
                <Orders orders={[]}/>
            </section>
        </>
    )
}