import { useEffect, useState } from 'react'
import Cart from './Components/Cart'
import MainContant from './Components/MainContant'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

function App() {
    const [count, setCount ] = useState(0);

  const [cards, setcards] = useState([
    {  id:1,
      img: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      heading:"iphone 11 pro ", 
      price:"$ 40,00",
      isDone:false
     },
      {
       id:2,
       img: "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846501.jpg?ga=GA1.1.1372180739.1714474320&semt=ais_hybrid",
       heading:"iphone 6", 
       price:"$ 20,00",
       isDone:false
     },

       {
         id:3,
         img: "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147839163.jpg?ga=GA1.1.1372180739.1714474320&semt=ais_hybrid",
         heading:"iphone 6 Pro ", 
         price:"$ 25,00",
         isDone:false
       },
       {  id:4,
        img: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722663.jpg?ga=GA1.1.1372180739.1714474320&semt=ais_hybrid",
        heading:"iphone 12", 
        price:"$ 40,00",
        isDone:false
       },
       {  id:5,
        img: "https://images.unsplash.com/photo-1701680848891-89a6a4e9e31a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZSUyMDE0JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww",
        heading:"iphone 11 pro ", 
        price:"$ 40,00",
        isDone:false
       },
        {
         id:6,
         img: "https://img.freepik.com/free-psd/iphone-15-pro-max-mockup-front-view_1332-60636.jpg?ga=GA1.1.1372180739.1714474320&semt=ais_hybrid",
         heading:"iphone 15 pro", 
         price:"$ 20,00",
         isDone:false
       },
  
         {
           id:7,
           img: "https://img.freepik.com/free-vector/smartphone-with-colorful-display_23-2147696227.jpg?ga=GA1.1.1372180739.1714474320&semt=ais_hybrid",
           heading:"iphone 9 ", 
           price:"$ 25,00",
           isDone:false
         },

         {
          id:8,
          img: "https://images.unsplash.com/photo-1701680853149-1b5240a95eeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
          heading:"iphone 14 ", 
          price:"$ 35,00",
          isDone:false
        },
     ])

     useEffect(()=>{
      const productonmount=1
      updateButton(productonmount)
     },[]);

   let updateButton = (id) => {
      console.log("updatebutton", id)
      setcards(cards.map((card) => {
        if (card.id === id) {
          card.isDone = !card.isDone

          setCount((count)=>(card.isDone ? count +1 : count-1))
        }
        return card
      }))
      console.log(cards);
    }  

  return (
    <>
    <Navbar count={count} />
    <MainContant />
    <div className='styleForCards' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "100px", marginBottom: '20vh' }}>
      {cards.map((card, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
          <Cart id={card.id} img={card.img} heading={card.heading} price={card.price} isDone={card.isDone} updateButton={updateButton} />
        </div>
      ))}
    </div>
    <Footer />
  </>
  )
}

export default App

