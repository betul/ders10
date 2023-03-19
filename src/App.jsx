import Person from "./Person"

function App() {
    const persons = [
        { nameSurname: "Marie Doe", photo: "https://randomuser.me/api/portraits/women/94.jpg", phone: "05466060606" },
        { nameSurname: "John Doe", photo: "https://randomuser.me/api/portraits/men/94.jpg", phone: "0546" },
        { nameSurname: "Anita Doe", photo: "https://randomuser.me/api/portraits/women/91.jpg", phone: "05406" }
    ]

    return (
        <section className="section">
            <h1>Contact List</h1>
            <div className="row">

            {
                persons.map( (elem) => 
                       <Person nameSurname={elem.nameSurname}  photo={elem.photo} phone={elem.phone} />
                )

            }
            </div>


        </section>
    )
}

export default App