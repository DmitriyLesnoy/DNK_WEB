import Link from "next/link";
import { FC } from "react";
import navItems from "./navigationData";
import { useRouter } from "next/router";


const Navigation: FC = () => {
    const router = useRouter()
    console.log(router)

    return (
        <nav className='pt-10 flex justify-center'>
            <ul className='text-3xl flex space-x-10'>
                {
                    navItems.map(navItem => {
                        return (
                            <li key={navItem.text}>
                                <Link
                                    className={`transition ease-in-out duration-500 hover:text-cyan-700 
                                    ${router.pathname===navItem.url ? 'text-emerald-500' : ''}`}
                                    href={`${navItem.url}`}
                                >
                                    {navItem.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation 
