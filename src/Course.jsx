import propTypes from "prop-types";

function Course(props){
        return(
            <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <h5>Ratings:{props.ratings}</h5>
            </div>
        );
}

Course.propTypes={
    name:propTypes.string,
    price:propTypes.string,
    image:propTypes.string,
    ratings:propTypes.number,
    show:propTypes.bool
};
export default Course;
