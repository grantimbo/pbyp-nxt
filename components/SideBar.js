import Link from 'next/link'

const SideBar = () => {

  return(
    <aside className="sidebar">
        <Link href="/">
            <a data-nav="home" className="logo" >
                <img src="/imgs/logo.png" alt="Powered by Pen"/>
            </a>
        </Link>
        <p className="tagline">Ash <span>X</span> Grant</p>

        <div className="menu-button"><i className="icon-dehaze"></i></div>
        <div className="mobile-menu">
            <div className="menu-button-close"><i className="icon-close"></i></div>
            <nav className="nav">
                <ul>
                    <li><Link href="/projects"><a data-nav="portfolio">Projects</a></Link></li>
                    <li><Link href="/about"><a data-nav="about">About</a></Link></li>
                    <li><Link href="/contact"><a data-nav="contact">Contact</a></Link></li>
                </ul>
            </nav>
            <nav className="social-links clear">
                <a className="social-facebook" href="//facebook.com/poweredbypen" target="_blank"><i className="icon-facebook"></i></a>
                <a className="social-artstation" href="//artstation.com/poweredbypen" target="_blank"><i className="icon-artstation"></i></a>
                <a className="social-instagram" href="//instagram.com/wearepoweredbypen" target="_blank"><i className="icon-instagram"></i></a>
                <a className="social-youtube" href="//www.youtube.com/channel/UC8ZqJKbN0diXtBKCRakcxAw/" target="_blank"><i className="icon-youtube"></i></a>
                <a className="social-behance" href="//behance.net/poweredbypen" target="_blank"><i className="icon-behance"></i></a>
            </nav>
        </div>
    </aside>
  )
}

export default SideBar