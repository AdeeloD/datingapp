import React, { useState } from 'react'
import { Heart, X } from 'lucide-react'

const userdata = [
  { "user_id": 1, "username": "June", "age": 74, "image": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" },
  { "user_id": 2, "username": "Kimbo", "age": 64, "image": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { "user_id": 3, "username": "Ame", "age": 78, "image": "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
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
    const currentUser = userdata[currentIndex];
    console.log(`User swiped left: ${currentUser.username}, ID: ${currentUser.user_id}`);
    setCurrentIndex((prevIndex) =>
      prevIndex < userdata.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleSwipeRight = () => {
    const currentUser = userdata[currentIndex];
    console.log(`User swiped right: ${currentUser.username}, ID: ${currentUser.user_id}`);
    setCurrentIndex((prevIndex) =>
      prevIndex < userdata.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const currentUser = userdata[currentIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-500 overflow-hidden">
      <div className="relative w-full max-w-md h-[82vh] shadow-2xl rounded-xl overflow-hidden">
        <img
          src={currentUser.image}
          alt={currentUser.username}
          className="h-full w-full object-cover cursor-pointer rounded-xl"
          onClick={() => {
            console.log(`User clicked to zoom: ${currentUser.username}, ID: ${currentUser.user_id}`);
            toggleZoom();
          }}
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white rounded-b-xl">
          <h2 className="text-2xl font-bold">{currentUser.username}, {currentUser.age}</h2>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6 pb-8">
          <button
            onClick={() => {
              console.log("Swiped Left!");
              handleSwipeLeft();
            }}
            className="bg-red-500 text-white p-5 rounded-full shadow-lg hover:bg-red-600 transition duration-200"
          >
            <X size={36} />
          </button>
          <button
            onClick={() => {
              console.log("Swiped Right!");
              handleSwipeRight();
            }}
            className="bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-200"
          >
            <Heart size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}
