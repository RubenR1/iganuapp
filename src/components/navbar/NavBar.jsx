import "./navbar.scss"

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className="wrapper"> 
      <div className="left">
        <a href="#intro" className="logo">
            iganu.
        </a>
      </div>
      <div className="right">
        <a href="#intro" className="menu">
            |||
        </a>
      </div>
      </div>
    </div>
  )
}
