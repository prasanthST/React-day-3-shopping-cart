import { PropTypes } from 'prop-types'

const Cart = (props) => {
    return (

        <>
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-md-6 col-lg-12">
                <div className="card d-flex align-items-center" style={{ width: "18rem" }}>
                    <img src={props.img} className="card-img-top" style={{ }} alt="..." />
                    <div className="card-body">
                        <h3 className="card-title ">{props.heading}</h3>
                        <p className=' fs-4 fw-medium ms-4'>{props.price}</p>
                        <button className={` ms-4 btn ${props.isDone ?"btn btn-danger":"btn btn-success"}`} 
                        onClick={() => { props.updateButton(props.id) }}> {props.isDone ? "Remove from Cart" : "Add to Cart"}</button>
                    </div>
                </div>

                </div>
            </div>
          </div>

             
        </>

    )
}
Cart.propTypes = {
    heading: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    updateButton: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}
export default Cart