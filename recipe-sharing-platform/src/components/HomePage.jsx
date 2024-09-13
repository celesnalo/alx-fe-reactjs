
import { useState, useEffect} from "react";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    return(
        <div className="bg-blue-200 w-16 h-24 p-4 text-black rounded-lg">
            {data.map(item => {
                <div>
                    <h2>{item.id}</h2>
                    <h1>{item.title}</h1>
                    <p className="text-gray-800">{item.image}</p>
                    <img src={item.image} alt="food"  className="rounded-lg"/>
                </div>
            })}
        </div>
    )
}

export default HomePage;