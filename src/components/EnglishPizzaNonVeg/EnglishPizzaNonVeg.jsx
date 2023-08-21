import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



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

function AnimatedCard({ image, title, description ,price}) {
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
    <Card className="menu-card" style={{ background: "transparent", color: 'white' }}>
      <div className="mainCard">
        <div className="inner-Card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  
          <div style={{ flex: 1 }}>
            <h2 style={{marginTop: '5%', fontSize: '24px', fontWeight: 'bold' }}>{title}</h2>
          </div>
  
          <div style={{ flex: 1, textAlign: 'right' }}>
            <h1 className="price-Card" style={{ fontSize: '28px' }}>{price}</h1>
          </div>
        </div>
  
        <p1 style={{  margin: '5%', marginBottom: '5%', fontSize: '18px' }}>{description}</p1>
      </div>
    </Card>
  </motion.div>
  


  
  );
}

function PizzaEnglishNonVeg() {
  return (
    <div className="main">
      <Navbar />

      <h1
        style={{ color: 'black', justifyContent: 'center', 
        display: 'flex', fontWeight: 'bolder', 
        margin: '2%', marginBottom: '10%' }}
        
      >Non Veg Pizza</h1>


      <div className="card-container">
        <AnimatedCard

          title="Margherita Pizza"
          description="The Margherita pizza is an iconic Italian delight, named after Queen Margherita of Italy. It features a thin, golden crust topped with creamy mozzarella, ripe tomatoes, and fragrant basil leaves—a simple yet exquisite combination that embodies the essence of authentic Italian flavors."
          price="7,90€"
        />
        <AnimatedCard

          title="Rucola Pizza"
          description="
          The Rucola pizza combines mozzarella's creaminess, peppery arugula, juicy cherry tomatoes, and the subtle complexity of Parmesan. A harmonious blend of flavors and textures that offers a fresh and sophisticated Italian experience."
          price="9,50€"      

        />
        <AnimatedCard
          title="Funghi Pizza"
          description="A mouthwatering symphony of perfectly seasoned, flame-grilled beef patty, served on a fresh, toasted bun, accompanied by a tantalizing array of gourmet toppings that will leave your taste buds craving more."
          price="8,50€"      
       />
        
        <AnimatedCard
          title="Vegetaria Pizza"
          description="Delight in the harmonious blend of Mozzarella, fresh zucchini, caramelized onions, sun-dried tomatoes, artichokes, capers, and olives with our Vegetaria pizza."
          price="11,50€"      
          
          /> 

          <AnimatedCard
          title="Drei Kase Pizza"
          description= "Discover the richness of our (Drei Kase) pizza. Immerse yourself in the velvety harmony of melted mozzarella, the bold character of Gorgonzola, and the aged elegance of Parmesan, bringing you a symphony of three distinct cheeses that redefine indulgence."
          price="10,50€"      
          
          />

        <AnimatedCard
          title="Salami Milano Pizza"
          description=" Experience the allure of (Salami Milano) pizza. Embrace the delectable blend of melted mozzarella and the exquisite notes of Salami Milano (Milde Salami), creating a culinary journey that captures the essence of Milan's finest flavors."
          price="11,50€"      
        
        />

         <AnimatedCard
          title="Salami Pikant Pizza"
          description="Embark on a flavorful journey with our (Salami Pikant) pizza. Delight in the perfect marriage of creamy mozzarella and the zesty kick of pikante slami, creating a tantalizing combination that brings a touch of spice to every bite. "
          price="11,50€"      
        
        />
        <AnimatedCard
          title="Proscuitto Pizza"
          description="Indulge in the captivating (Prosciutto) pizza. Immerse yourself in the harmonious duet of melted mozzarella and the delicate charm of Parmaschinken, delivering a culinary delight that pays homage to the timeless allure of Italian flavors. "
          price="11,50€"      

        />
        <AnimatedCard
          title="Mista Pizza"
          description="Indulge in the captivating (Prosciutto) pizza. Immerse yourself in the harmonious duet of melted mozzarella and the delicate charm of Parmaschinken, delivering a culinary delight that pays homage to the timeless allure of Italian flavors. "
          price="11,50€"      

        />
       
        <AnimatedCard
          title="Hawai Pizza"
          description="Discover paradise in every bite of our (Hawai) pizza melted mozzarella, savory kockschinken (cooked ham), and the sweet touch of pineapple (Ananas), capturing the essence of tropical bliss."
          price="11,00€"      
          
          />

        <AnimatedCard
          title="Tonno Cipolla Pizza"
          description="Indulge in the rich flavors of our Tonno Cipolla pizza featuring the perfect combination of mozzarella, thunfisch (tuna), and rote zwiebeln (red onions). A taste that delights!"
          price="9,90€"      
        />

           <AnimatedCard
          title="Sicilia Pizza"
          description="Immerse yourself in the flavors of Sicily with our (Sicilia pizza), crafted with a blend of Mozarella, Sardellen, Artischocken, Kapern, getrocknete Tomaten, Oliven, Knoblauch, rote Zwiebeln, and a hint of Chili, bringing the vibrant taste of the Mediterranean to your plate."
          price="11,50€"      
          
          />

          <AnimatedCard
           title="Bianco(ohne TomatensoBe)"
          description="Indulge in the simplicity of our Bianco pizza, free from traditional tomato sauce. Experience the elegance of Mozarella, the richness of Olivenöl, the aromatic touch of Zwiebln (onions), and the drizzle of Balsamicocreme, crafting a symphony of flavors that redefine the pizza experience.."
          price="10,50€"      
         
         />

          <AnimatedCard
          title="Bianco Spezial (ohne Tomatensoße)"
          description="Experience the exquisite (Bianco Spezial) pizza, a tomato-free delight. Immerse yourself in the bold flavors of Mozarella, Chiliöl, Gorgonzola, Parmesan, Parmaschinkeni, pikanter Salami, Salami Milano, and getrocknete Tomaten (sun-dried tomatoes), creating a culinary masterpiece that redefines your pizza cravings."
          price="11,50€"      
          
          />



          <AnimatedCard
          title="Spinat Pizza"
          description="Delight in the simplicity of our (Spinat) pizza, featuring the creamy blend of Mozzarella and Büffelmozzarella, topped with the earthy goodness of spinach, creating a harmonious and satisfying taste."
          price="10,50€"      
         
         />

          <AnimatedCard
          title="Gorgonzola Pizza"
          description="Indulge in the bold flavors of our (Gorgonzola) pizza. Delight in the perfect combination of Gorgonzola and Mozzarella, complemented by the earthy freshness of spinach, delivering a taste sensation that's both rich and satisfying."
          price="10,50€"      
          
          />
          <AnimatedCard
          title="Cotto Pizza"
          description="Introducing our flavorful creation: Cotto (Mozzarella, Kochschinken). Enjoy the timeless pairing of Mozzarella and Kochschinken, crafting a pizza that offers both simplicity and delightful taste."
          price="10,50€"      
          
          />
          <AnimatedCard
          title="Rocca Pizza"
          description="Discover the zesty allure of (Rocca) pizza. Indulge in the exquisite blend of Mozzarella, Rocolla (arugula), pikante Salami, and the bold notes of Parmesan, creating a symphony of flavors that's both vibrant and satisfying.."
          price="11,50€"      
          
          />

          <AnimatedCard
          title="Munzuro Pizza"
          description="Indulge in the harmonious blend of flavors with our (Munzuro) pizza. Featuring Mozzarella, Tomatensoße, Spinat, Hähnchen, Parmesankäse, Champignons, and a creamy Sahnesoße finish, this pizza offers a delightful spectrum of tastes to savor."
          price="11,50€"      
         
         />
          <AnimatedCard
          title="Lachs Pizza"
          description="Discover the (Lachs) pizza, a symphony of flavors. Enjoy the combination of Spinat, Cherrytomaten (cherry tomatoes), Knoblauch (garlic), and Parmesankäse (Parmesan cheese), crafting a culinary delight that's both vibrant and satisfying."
          price="12,50€"      
          
          />
          <AnimatedCard
          title="Scampi Pizza"
          description="Indulge in the flavors of the sea with our (Scampi) pizza. Enjoy the harmonious blend of Mozzarella, Tomatensoße (tomato sauce), Spinat, Cherrytomaten (cherry tomatoes), Knoblauch (garlic), and Parmesankäse (Parmesan cheese), creating a taste sensation that captures the essence of delightful seafood."
          price="12,50€"      
          
          />

          <AnimatedCard
          title="Brokoli Pizza"
          description="Savor the wholesome blend of Mozzarella, Tomatensoße, Champignon, Spinat, Zwiebeln, Knoblauch, Cherrytomaten, and Parmesankäse with our (Brokoli) pizza, offering a satisfying and nourishing medley of flavors.."
          price="11,50€"      
          
          />

          <AnimatedCard
          title="Hackfleisch Pizza"
          description="
          Delight in our (Hackfleisch) pizza. Enjoy the harmony of Mozzarella, Tomatensoße, Hähnchen (chicken), Cherrytomaten (cherry tomatoes), Knoblauch (garlic), and Parmesankäse, crafting a flavorful combination that's a feast for your taste buds."
          price="10,50€"      
          
          />
          <AnimatedCard
          title="Tonno Special Pizza"
          description="Experience the exceptional taste of (Tonno Special) pizza. Delight in the combination of Mozzarella, Pesto, Pepperoncini, Tonno (tuna), Knoblauch (garlic), Zwiebel (onion), and Oliven (olives), creating a unique medley of flavors that's both bold and satisfying."
          price="11,50€"      
         
         />

          <AnimatedCard
          title="Pizza Mariana"
          description="Indulge in the essence of (Pizza Mariana). Delight in the perfect fusion of Tomatensauce, olivenöl, and oregano, delivering a classic and flavorful experience that captures the heart of Italian cuisine."
          price="7,50€"      
          
          />
          <AnimatedCard
          title="Pizza Napoli"
          description="Savor the spirit of Napoli with our (Pizza Napoli). Delight in the Mediterranean blend of Sardellen, Oliven, and kapern (capers), crafting a taste that transports you to the vibrant streets of Naples with every bite."
          price="9,50€"      

         />
          <AnimatedCard
          title="Pizza Fungi e Peproni"
          description="Delight in the flavors of our (Pizza Fungi e Peperoni). Enjoy the spicy kick of pikante Salami combined with the earthiness of funghi (mushrooms) and the zesty touch of peperoni (bell peppers), creating a harmonious blend that tantalizes your taste buds."
          price="11,50€"      
          
          />

         <AnimatedCard
          title="Pizza Hühnerfleisch "
          description="Indulge in our (Pizza Hühnerfleisch). Experience the delightful combination of Hausgemachte sauce, oliven, zwiebeln (onions), and the aromatic touch of Oregano, creating a flavorful harmony that elevates the essence of tender Hühnerfleisch (chicken) on your pizza."
          price="11,50€"      
         
         />

          <AnimatedCard
          title="Pizza Beef "
          description="Satisfy your cravings with our (Pizza Beef). Enjoy the classic combination of Mozarella, Tomatensauce, and the savory touch of Salami, creating a timeless flavor profile that's both hearty and satisfying."
          price="11,50€"      

         />
          <AnimatedCard
          title="Pizza Kartofel "
          description="Experience the distinct taste of (Pizza Kartofel). blending Mozarella, Tomatensauce, Zwiebel, Jalapenos, Knoblauchöl, and Kartoffel for a uniquely gratifying flavor journey."
          price="11,50€"      
          
          />
          <AnimatedCard
          title="Pizza Sucuk "
          description="Discover the rich flavors of (Pizza Sucuk). Delight in the combination of Mozarella, Tomatensauce, the savory goodness of Sucuk, and the creamy touch of Holländische Sauce, crafting a pizza that offers a delightful blend of tastes and textures."
          price="11,50€"      
         
         />
          <AnimatedCard
          title="Pizza Jalapenos "
          description="Embrace the heat with our (Pizza Jalapenos). Enjoy the fiery combination of Mozarella, Salami, Pikante, Jalapenos, and Schinken (ham), creating a pizza that delivers a spicy and flavorful kick with every bite."
          price="11,50€"      
          
          />
          <AnimatedCard
          title="Pizza Hähnchen & Sucuk"
          description=" Enjoy the blend of Mozarella, Tomatensauce, succulent Hähnchen, flavorful Sucuk, and smoky BBQ Soße, creating a pizza that balances dynamic flavors and textures."
          price="11,50€"      
          
          />
          <AnimatedCard
          title="Pizza BBQ "
          description="Savor the (Pizza BBQ) experience. Enjoy the dynamic blend of Mozarella, Pikante, Milano, Jalapenos, and the rich flavor of BBQ Soße, crafting a pizza that's bold, spicy, and irresistibly tangy."
          price="11,50€"      
        
        />
          <AnimatedCard
          title="Pizza Curry "
          description=" Delight in the fusion of Mozarella, Curry Sauce, tender Hähnchen (chicken), and the sweet touch of Ananas (pineapple), crafting a pizza that's a tantalizing blend of savory and exotic flavors."
          price="11,50€"      
         
         />
          <AnimatedCard
          title="Pizza BBQ Chicken "
          description="Delve into the delectable realm of (Pizza BBQ Chicken). Experience the perfect fusion of BBQ Soße, Mozarella, Curry Sauce, succulent Hähnchen (chicken), Zwiebel (onion), and Jalapenos, crafting a pizza that satisfies your cravings with smoky, tangy, and spicy flavors."
          price="11,50€"      
         
         />



      </div>
    </div>
  );
}

export default PizzaEnglishNonVeg;
