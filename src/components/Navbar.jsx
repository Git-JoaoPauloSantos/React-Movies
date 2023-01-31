import './Navbar.css'
import { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdNotifications } from 'react-icons/md'
import Logo from '../images/ReactMovieLogo.png'
import IconUser from '../images/IconUser.png'


const Navbar = ({ blackNavbar }) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }
    const visibilitySearchInput = () => {
        input.current.style.width = '150px'
        input.current.focus()
        formInput.current.style.border = '1px solid #FFF'
    }

    function myFunction() {
        input.current.style.width = '0px'
        formInput.current.style.border = 'none'
    }

    const formInput = useRef()
    const input = useRef()

    return (
        <nav id='navbar' className={blackNavbar ? 'black' : ''}>
            <div className="left-container">
                <Link to={"/"}><img src={Logo} alt="ReactMovie" /></Link>
            </div>
            <div className="right-container">
                <form onSubmit={handleSubmit} ref={formInput} autoComplete="off">
                    <input id='search-input' ref={input} onBlur={myFunction}
                        type="text"
                        name="search"
                        placeholder="Pesquisar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button id='search-btn' type="submit" onMouseOver={visibilitySearchInput}> <BiSearchAlt2 /> </button>
                </form>
                <div id="icon-notification"><MdNotifications /></div>
                <div id="icon-user"><img src={IconUser} alt="Icone do Usuário" /></div>
            </div>
        </nav>
    )
}

export default Navbar