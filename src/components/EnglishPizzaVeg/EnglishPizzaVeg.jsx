import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PizzaImg from "../../assets/pizza.png";
import plus from "../../assets/add b.png";
import minus from "../../assets/minus-b.png";
import Add from "../../assets/add.png";
import Modal from "react-bootstrap/Modal"; // Import the Modal component

import { useCart } from "../CartContext/CartContext"

import './EnglishVegPizza.css';



const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
};

function AnimatedCard({ image, title, description, price, onAddClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });



  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <Card className="menu-card" style={{ background: "transparent", color: 'white', border: '1px solid grey', borderRadius: '5px' }}>
        <div className="mainCard">
          <div className="rounded-image-container">
            <img
              src="https://imageproxy.wolt.com/menu/menu-images/5f16d1f300b20312ea32839f/175b6a06-ccc3-11ea-9136-2aea6e404d63_pizza_margherita.jpeg?w=600"
              alt={title}
              width={200}
              height={120}
              className="menu-image"
            />
            <button className="add-button" onClick={() => { console.log("Button clicked"); onAddClick(); }}>
              <img src={Add} width={50} alt="Add" />
            </button>
          </div>
          <div className="inner-Card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ marginTop: '5%', fontSize: '24px', fontWeight: 'bold' }}>{title}</h2>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <h1 className="price-Card" style={{ fontSize: '28px' }}>{price}</h1>
            </div>
          </div>
          <p1 style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%', marginBottom: '0%', fontSize: '18px' }}>
            {description}
          </p1>
        </div>
      </Card>

    </motion.div>


  );
}

function PizzaEnglishVeg() {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity


  // Other code...

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  const handleAddButtonClick = (title, price, imageUrl) => {
    console.log(imageUrl);
    setSelectedPizza({ title, price, imageUrl }); // Include imageUrl in the selected pizza
    setModalVisible(true);
  };


  const handleCloseModal = () => {
    setSelectedPizza(null);
    setModalVisible(false);
    setQuantity(1); // Reset quantity when closing the modal
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const { dispatch } = useCart();
  const { cartState } = useCart();


  const handleAddToBasket = () => {
    const item = {
      title: selectedPizza.title,
      price: selectedPizza.price,
      imageUrl: selectedPizza.imageUrl,
      quantity: quantity,
    };
  
    const existingItemIndex = cartState.items.findIndex(existingItem => existingItem.title === item.title);
  
    if (existingItemIndex !== -1) {
      // Item already exists, increase its quantity
      const updatedItems = [...cartState.items];
      updatedItems[existingItemIndex].quantity += quantity;
  
      dispatch({ type: "SET_ITEMS", payload: updatedItems });
  
      // Update local storage with the updated cart state
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    } else {
      // Item doesn't exist, add it to the cart
      dispatch({ type: "ADD_ITEM", payload: item });
  
      // Update local storage with the updated cart state
      const updatedCartState = {
        ...cartState,
        items: [...cartState.items, item],
      };
      localStorage.setItem('cartItems', JSON.stringify(updatedCartState.items));
    }
  
    handleCloseModal();
  }
  

  const calculateTotalBill = () => {
    const price = parseFloat(selectedPizza?.price.replace("€", "").replace(",", "."));
    return (price * quantity).toFixed(2) + "€";
  };



  return (
    <div className="main">
      <Navbar />

      <h1
        style={{
          color: 'black', justifyContent: 'center',
          display: 'flex', fontWeight: 'bolder',
          margin: '2%', marginBottom: '10%'
        }}

      >Veg Pizza</h1>



      <div className="card-container">
        <AnimatedCard
          title="Margherita Pizza"
          description="Our vegan Margherita delights with dairy-free mozzarella, fresh basil, and olive oil—a compassionate twist on the classic."
          price="8,90€"
          onAddClick={() => handleAddButtonClick("Margherita Pizza", "8,90€", "https://imageproxy.wolt.com/menu/menu-images/5f16d1f300b20312ea32839f/175b6a06-ccc3-11ea-9136-2aea6e404d63_pizza_margherita.jpeg?w=600")}
        />

        <AnimatedCard
          title="Funghi Pizza"
          description="Earthy Funghi pizza boasts champignon mushrooms and oregano—a mushroom lover's dream."
          price="9,90€"
          onAddClick={() => handleAddButtonClick("Funghi Pizza", "9,90€", "https://imageproxy.wolt.com/menu/menu-images/5f16d1f300b20312ea32839f/175b6a06-ccc3-11ea-9136-2aea6e404d63_pizza_margherita.jpeg?w=600")}
        />

        <AnimatedCard
          title="Rucola Pizza"
          description="Refreshing Rucola pizza combines arugula and cherry tomatoes for a zesty experience."
          price="10,50€"
        />

        <AnimatedCard
          title="Gemüse Pizza"
          description="Gemüse bursts with freshness—mushrooms, peppers, zucchini, onions, and more, celebrating nature's bounty."
          price="11,50€"
        />

        <AnimatedCard
          title="Salami Pizza"
          description="Savor vegan Salami pizza, delivering bold flavors and satisfying textures."
        />

        <AnimatedCard
          title="Pizza Vegane Mista"
          description="Vegane Mista blends vegan salami, mushrooms, peperoni, and cherry tomatoes—a harmony of tastes."
          price="11,50€"
        />

        <AnimatedCard
          title="Pizza Vegane Spinat"
          description="Vegane Spinat offers nutrient-packed spinach, bell peppers, cherry tomatoes, and olives—a wholesome delight."
          price="11,50€"
        />
      </div>
      <Modal show={modalVisible} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add to Basket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pizza-image-container">
            <img
              src={selectedPizza?.imageUrl}
              alt={selectedPizza?.title}
              className="pizza-image"
            />
          </div>
          <h3>{selectedPizza?.title}</h3>
          <p>Price: {selectedPizza?.price}</p>


          <div className="quantity-controls">
            <button
              onClick={handleIncrement}
              style={{
                background: "transparent",
                border: "none",
              }}
            >
              <img src={plus} width={50} alt="Add" />
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleDecrement}
              style={{
                background: "transparent",
                border: "none",
              }}
            >
              <img src={minus} width={50} alt="Add" />
            </button>
          </div>



          <p>Total Bill: {calculateTotalBill()}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
          <button className="btn btn-primary" onClick={handleAddToBasket}>Add to Basket</button>
        </Modal.Footer>
      </Modal>




    </div>
  );
}

export default PizzaEnglishVeg;
