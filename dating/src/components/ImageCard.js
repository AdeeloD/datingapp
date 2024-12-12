import React, { useState } from 'react'
import { Heart, X } from 'lucide-react'

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

export default function TinderStyleCards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < userdata.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < userdata.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const currentUser = userdata[currentIndex];

    return (
        <div className="  flex items-center justify-center bg-gray-100 ">
            <div className="relative w-full max-w-md h-[80vh] shadow-xl rounded-xl overflow-hidden">
                <img 
                    src={currentUser.image} 
                    alt={currentUser.username} 
                    className=" h-full w-full object-cover cursor-pointer"
                    onClick={toggleZoom}
                />
                {isZoomed && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                        onClick={toggleZoom}
                    >
                        <img 
                            src={currentUser.image} 
                            alt={`Zoomed ${currentUser.username}`} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                    <h2 className="text-2xl font-bold">{currentUser.username}, {currentUser.age}</h2>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                    <button 
                        onClick={handleSwipeLeft}
                        className="bg-red-500 text-white p-4 rounded-full"
                    >
                        <X size={32} />
                    </button>
                    <button 
                        onClick={handleSwipeRight}
                        className="bg-green-500 text-white p-4 rounded-full"
                    >
                        <Heart size={32} />
                    </button>
                </div>
            </div>
        </div>
    )
}
