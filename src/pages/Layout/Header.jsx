import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transferent position-absolute">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="btn1 nav-link mx-5" width={200} aria-current="page" href="/">Chart</a>
        </li>
        <li className="nav-item">
          <a className="btn1 nav-link mx-5" width={200} href="/">Connect Wallet</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header