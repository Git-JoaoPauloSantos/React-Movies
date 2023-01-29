import './Navbar.css'
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import { CgUserlane } from 'react-icons/cg';
import Logo from '../images/ReactMovieLogo.png'


const Navbar = ({ blackNavbar }) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav id='navbar' className={blackNavbar ? 'black' : ''}>
            <div className="logo-container">
                <img src={Logo} alt="ReactMovie" />
            </div>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Pesquisar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit"> <BiSearchAlt2 /> </button>
                </form>
                <div className="icon-user"><CgUserlane /></div>
            </div>
        </nav>
    )
}

export default Navbar