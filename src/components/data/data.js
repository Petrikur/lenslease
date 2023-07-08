
import canon1 from "../../assets/images/cameraImages/canoneos05.png"
import dji400 from "../../assets/images/cameraImages/drone1.png"
import nikon1 from "../../assets/images/cameraImages/nikon1.png"
import sony1 from "../../assets/images/cameraImages/sony1.png"

export const cameraData = [
    {
      id: 1,
      brand: "Canon",
      model: "Eos 550 D",
      categories: ["Cameras", "All"],
      image: canon1,
      pricePerDay: 10,
      discount: 20
    },
    {
      id: 2,
      brand: "Sony",
      model: "some model",
      categories: ["Cameras","All"],
      image: sony1,
      pricePerDay: 10,
      discount: 0
    },
  
    {
      id: 5,
      brand: "Nikon",
      model: "model 2",
      categories: ["Cameras","All"],
      image: nikon1,
      pricePerDay: 15,
      discount: 0
    },
  
    {
      id: 8,
      brand: "Dji",
      model: "400",
      categories: ["Drones", "All"],
      image: dji400,
      pricePerDay: 20,
      discount: 0
    },
  ];