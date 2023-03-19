

function Person(props) {
    return (

            <div className="col-md-4 border">
                <img src={props.photo} alt="" />
                <p className="text-success">{props.nameSurname}</p>
                <p className="text-warning">{props.phone}</p>
            </div>
    )

}


export default Person