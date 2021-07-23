import React from 'react'

function Nav({search, updateSearch, updateQuery}) {
    return (

        <nav className="navbar ">
        <div className="container-fluid">
          <span className="navbar-brand">Cocktease</span>
          <div className="d-flex">
          <input className="form-control me-2 rounded-pill" value={search} onChange={(e)=>updateSearch(e)} placeholder="Search for Cocktail"/><br/>
          <input className="btn btn-primary rounded-pill" type="submit" onClick={updateQuery} value="Search cocktail" aria-label="search"/>
          </div>
        </div>
      </nav>
    )
}

export default Nav
