import './Header.css'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import NavBar from './NavBar/NavBar'

const Header = () => {
  return (
    <>
    <header className="header">
      <NavBar/>
      <div id='aboutme' className="header__container content">
        <HeaderInfo/>
      </div>
    </header>
    </>
  )

}
export default Header