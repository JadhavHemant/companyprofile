import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/items");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };   

    getData();
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
    exit: { opacity: 0, y: -50 }, 
  };

  return (
    <>
    <div className="relative p-6 pt-4 space-y-12 capitalize bg-gradient-to-r from-yellow-100 via-red-200 to-yellow-100">
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } gap-6`}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={animationVariants}
        >
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
            <p className="mt-4 text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div> 
    </>
  );
};

export default HomePage;
