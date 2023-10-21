import {useNavigate} from "react-router-dom";

export function NaveBare(){
    const navigate = useNavigate()
    return(
        <nav className="colorNaveBar border-gray-200 fixed top-0 z-10 w-screen NaveBorder">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <div className="flex items-center space-x-4 lg:space-x-0">
                    <img src="/Logo.png" className="h-16 mr-3 borderRounded" alt="Flowbite Logo" onClick={() => navigate(-1)} />
                    <img src="/NameLogo.png" className="h-16 mr-3 borderRounded" alt="Flowbite Logo" onClick={() => navigate(-1)} />
                </div>
                <div className="hidden w-full md:block md:w-auto flex-2" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white   ">
                        <li>
                            <button href="#" className="block py-2 pl-3 pr-4 text-white bgColor rounded md:bg-transparent md:text-blue-700 md:p-0  " aria-current="page" onClick={() => navigate(-1)} >Home</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}