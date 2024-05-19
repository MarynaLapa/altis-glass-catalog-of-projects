import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
        <div className="container">
            <nav>
                <ul>
                    <li></li>
                    <li>Контакти</li>      
                </ul>
            </nav>  
        </div>
    </header>
  )
}

export default Header