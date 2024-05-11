import { IoIosArrowRoundForward } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServicesCarts = ({ services }) => {

    const { _id, price, category, description } = services || {};

    return (
        <div>
            <div>
                <div className="card  bg-green-300 shadow-md">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <h2 className="card-title">{category}</h2>
                            <h2 className="card-title">Price: {price}</h2>
                        </div>
                        <p className="h-24">{description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/servicesBooking/${_id}`}>
                                <button className="btn btn-primary flex items-center">Booking Now <IoIosArrowRoundForward /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCarts;

ServicesCarts.propTypes = {
    services: PropTypes.object
};