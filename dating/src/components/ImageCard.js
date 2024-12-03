import React from 'react'
import { Heart } from 'lucide-react'

const userdata = [
    { "user_id": 1, "username": "hcudihy0", "age": 74, "image": "http://dummyimage.com/207x100.png/dddddd/000000" },
    { "user_id": 2, "username": "hchant1", "age": 64, "image": "http://dummyimage.com/142x100.png/ff4444/ffffff" },
    { "user_id": 3, "username": "jferreras2", "age": 78, "image": "http://dummyimage.com/245x100.png/cc0000/ffffff" },
    { "user_id": 4, "username": "kpetken3", "age": 42, "image": "http://dummyimage.com/250x100.png/dddddd/000000" },
    { "user_id": 5, "username": "alitel4", "age": 81, "image": "http://dummyimage.com/153x100.png/cc0000/ffffff" },
    { "user_id": 6, "username": "everity5", "age": 61, "image": "http://dummyimage.com/151x100.png/dddddd/000000" },
    { "user_id": 7, "username": "lblyde6", "age": 99, "image": "http://dummyimage.com/149x100.png/cc0000/ffffff" },
    { "user_id": 8, "username": "glimpertz7", "age": 36, "image": "http://dummyimage.com/110x100.png/ff4444/ffffff" },
    { "user_id": 9, "username": "tpechard8", "age": 30, "image": "http://dummyimage.com/112x100.png/ff4444/ffffff" },
    { "user_id": 10, "username": "qboltwood9", "age": 12, "image": "http://dummyimage.com/206x100.png/ff4444/ffffff" }
]

const Image = ({ image, name, age, }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{age}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Heart />
                        Like
                    </button>
                </div>
            </div>
        </div>
    )
}

const ImageCard = () => {
    return (
        <div>
            {userdata.map((user) => {
                return (  // Hozzáadtuk a return kulcsszót
                    <div key={user.user_id}>
                        <Image
                            name={user.username}
                            age={user.age}
                            image={user.image}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ImageCard