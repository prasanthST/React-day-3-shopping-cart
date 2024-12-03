import { PropTypes } from 'prop-types'

const Navbar = (props) => {
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shopping</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">All Products</a></li>
            <li><a className="dropdown-item" href="#">Populat Items</a></li>
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <button className="btn btn-outline-dark" type="submit"><span className="me-2"><i className="bi bi-cart"></i></span>Cart<span className='count ms-2 fw-medium'>{props.count}</span></button>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
    heading: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
}


export default Navbar