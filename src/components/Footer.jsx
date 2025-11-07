import './style/Footer.css'


const Footer = () => {
  return (
    <footer className="footer__personal">
        <div className='footer__inf'>
            <h4 className='footer__name'>Jose Luis Duval Perez</h4>
            <nav className='footer__nav'>
                <ul className='footer__contact'>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
                <ul className='footer__contact footer__icon '>
                    <li>
                        <a href="https://www.linkedin.com/in/joseluisduval1505/" target='_blank'>
                            <i className='bx bxl-linkedin-square'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jduval15" target='_blank'>
                            <i className='bx bxl-github' ></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer