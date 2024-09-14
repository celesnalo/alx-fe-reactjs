
import { useState, useEffect} from "react";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    return(
        <div className="bg-blue-200 w-16 h-24 p-4 text-black rounded-lg sm:max-w-screen-md md:max-w-screen-lg overflow-hidden shadow-md hover:shadow-orange-600">
            {data.map(item => {
                <div>
                    <h2>{item.id}</h2>
                    <h1>{item.title}</h1>
                    <p className="text-gray-800">{item.image}</p>
                    <img src={item.image} alt="food"  className="rounded-lg w-full h-36 sm:h-48 object-cover"/>
                </div>
            })}
        </div>
    )
}

export default HomePage;