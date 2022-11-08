import { Link } from "react-router-dom";
import global from '../../../icon/globe.png'
import vk from '../../../icon/VK.png'
import tlg from '../../../icon/Telegram.png'
import ws from '../../../icon/Whatsapp.png'
import './style.css'

export const Footer = () => {

    return (
        <div className='footer'>
            <div className='content-footer'>
                <div className='card-content'>
                    <div className='brand b-footer'>qpick</div>
                    <div>
                        <ul className='menu-footer'>
                            <li>
                                <Link className='link-footer' to='/favourites'>Favourites</Link>
                            </li>
                            <li>
                                <Link className='link-footer' to='/basket'>Basket</Link>
                            </li>
                            <li>
                                <Link className='link-footer' to='/contacts'>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='menu-footer'>
                            <li>
                                <Link className='link-footer' to='/service'>Terms of service</Link>
                            </li>
                            <li>
                                <img className='global-icon' src={global}/>
                                <span className='menu-language'>
                                <button className='link-footer'>Каз</button>
                            </span>
                                <span className='menu-language'>
                                <button className='link-footer'>Рус</button>
                            </span>
                                <span className='menu-language'>
                                <button className='link-footer'>Eng</button>
                            </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link className='link-footer' to='/vk'>
                            <img className='social-network' src={vk} width='31px'/>
                        </Link>
                        <Link className='link-footer' to='/tlg'>
                            <img className='social-network' src={tlg}/>
                        </Link>
                        <Link className='link-footer' to='/ws'>
                            <img className='social-network' src={ws}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}