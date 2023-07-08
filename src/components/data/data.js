import canon1 from "../../assets/images/cameraImages/canoneos05.png";
import dji400 from "../../assets/images/cameraImages/drone1.png";
import nikon1 from "../../assets/images/cameraImages/nikon1.png";
import sony1 from "../../assets/images/cameraImages/sony1.png";

export const cameraData = [
  {
    id: 1,
    brand: "Canon",
    model: "EOS 550D",
    categories: ["Cameras", "All"],
    image: canon1,
    pricePerDay: 10,
    discount: 20,
    description: "The Canon EOS 550D is a versatile DSLR camera with advanced features. It offers high-resolution images and excellent low-light performance.",
    technicalAdvantages: [
      "18-megapixel APS-C CMOS sensor",
      "DIGIC 4 image processor",
      "9-point autofocus system",
      "Full HD 1080p video recording",
      "3.0-inch Clear View LCD screen",
    ],
  },
  {
    id: 2,
    brand: "Sony",
    model: "A7 Mark II",
    categories: ["Cameras", "All"],
    image: sony1,
    pricePerDay: 10,
    discount: 0,
    description: "The Sony A7 Mark II is a mirrorless camera with outstanding image quality and advanced features. It delivers stunning results in a compact and lightweight body.",
    technicalAdvantages: [
      "24.3-megapixel full-frame Exmor CMOS sensor",
      "5-axis in-body image stabilization",
      "Fast hybrid autofocus system",
      "Full HD 1080p video recording",
      "Wi-Fi and NFC connectivity",
    ],
  },
  {
    id: 3,
    brand: "Nikon",
    model: "D5 100",
    categories: ["Cameras", "All"],
    image: nikon1,
    pricePerDay: 15,
    discount: 0,
    description: "The Nikon D5 100 is a professional DSLR camera designed for photographers who demand exceptional performance and reliability. It excels in low-light conditions and offers high-speed shooting capabilities.",
    technicalAdvantages: [
      "20.8-megapixel full-frame CMOS sensor",
      "EXPEED 5 image processor",
      "153-point autofocus system",
      "4K UHD video recording",
      "ISO range up to 102,400",
    ],
  },
  {
    id: 4,
    brand: "DJI",
    model: "400",
    categories: ["Drones", "All"],
    image: dji400,
    pricePerDay: 20,
    discount: 0,
    description: "The DJI 400 is a reliable and feature-packed drone that offers impressive aerial capabilities. It is designed for capturing stunning aerial footage and provides intuitive flight controls.",
    technicalAdvantages: [
      "4K UHD video recording",
      "3-axis gimbal stabilization",
      "Obstacle sensing system",
      "25-minute flight time",
      "Intelligent flight modes",
    ],
  },
];
