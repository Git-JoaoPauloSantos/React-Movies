import React from 'react'
import './Footer.css'
// Icons
import {SlSocialLinkedin} from 'react-icons/sl'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="name">
            <p>Feito por: <span>João Paulo Santos</span></p>
        </div>
        <div className="social-networks">
            <a id='github' href="https://github.com/Git-JoaoPauloSantos" target="_blank"><BsGithub /></a>
            <a id='linkedin' href="https://www.linkedin.com/in/dev-joaopaulosantos/" target="_blank" ><SlSocialLinkedin /></a>
            <a id='instagram' href="https://www.instagram.com/joao_paul0_s/" target="_blank" ><BsInstagram /></a>
        </div>
        <div className="site">
            <p>Imagens e informações retiradas da API do site <a href="https://www.themoviedb.org/" target="_blank">www.themoviedb.org</a></p>
        </div>
    </footer>
  )
}

export default Footer