function Course(props){
    if(props.show){
        return(
            <div className="card">
                <img src={props.image}alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <h5>Ratings:{props.ratings}</h5>
            </div>
        );
    }
}
export default Course;