import canon1 from "../../assets/images/cameraImages/canoneos05.png";
import canon2 from "../../assets/images/cameraImages/canon2.png";
import canon3 from "../../assets/images/cameraImages/canon3.png";
import dji400 from "../../assets/images/cameraImages/drone1.png";
import dji2 from "../../assets/images/cameraImages/dji2.png";
import dji3 from "../../assets/images/cameraImages/dji3.png";
import nikon1 from "../../assets/images/cameraImages/nikon1.png";
import nikon2 from "../../assets/images/cameraImages/nikon2.png";
import sony1 from "../../assets/images/cameraImages/sony1.png";
import sony2 from "../../assets/images/cameraImages/sony2.png";
import sony3 from "../../assets/images/cameraImages/sony3.png";
import sony4 from "../../assets/images/cameraImages/sony4.png";
import stand from "../../assets/images/cameraImages/stand.jpg";
import panasonic from "../../assets/images/cameraImages/panasonic.png";

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
    brand: "Dji",
    model: "500",
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
  {
    id: 5,
    brand: "Dji",
    model: "400",
    categories: ["Drones", "All"],
    image: dji2,
    pricePerDay: 15,
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
  {
    id: 6,
    brand: "Dji",
    model: "300",
    categories: ["Drones", "All"],
    image: dji3,
    pricePerDay: 20,
    discount: 20,
    description: "The DJI 400 is a reliable and feature-packed drone that offers impressive aerial capabilities. It is designed for capturing stunning aerial footage and provides intuitive flight controls.",
    technicalAdvantages: [
      "4K UHD video recording",
      "3-axis gimbal stabilization",
      "Obstacle sensing system",
      "25-minute flight time",
      "Intelligent flight modes",
    ],
  },
  {
    id: 7,
    brand: "Nikon",
    model: "T 400",
    categories: ["Cameras", "All"],
    image: nikon2,
    pricePerDay: 20,
    discount: 0,
    description: "The Nikon T 400 is a professional DSLR camera designed for photographers who demand exceptional performance and reliability. It excels in low-light conditions and offers high-speed shooting capabilities.",
    technicalAdvantages: [
      "20.8-megapixel full-frame CMOS sensor",
      "EXPEED 5 image processor",
      "153-point autofocus system",
      "4K UHD video recording",
      "ISO range up to 102,400",
    ],
  },
  {
    id: 9,
    brand: "Sony",
    model: "A5 Mark II",
    categories: ["Cameras", "All"],
    image: sony2,
    pricePerDay: 15,
    discount: 0,
    description: "The Sony A5 Mark II is a mirrorless camera with outstanding image quality and advanced features. It delivers stunning results in a compact and lightweight body.",
    technicalAdvantages: [
      "24.3-megapixel full-frame Exmor CMOS sensor",
      "5-axis in-body image stabilization",
      "Fast hybrid autofocus system",
      "Full HD 1080p video recording",
      "Wi-Fi and NFC connectivity",
    ],
  },
  {
    id: 10,
    brand: "Sony",
    model: "A2 Mark II",
    categories: ["Cameras", "All"],
    image: sony3,
    pricePerDay: 30,
    discount: 0,
    description: "The Sony A2 Mark II is a mirrorless camera with outstanding image quality and advanced features. It delivers stunning results in a compact and lightweight body.",
    technicalAdvantages: [
      "24.3-megapixel full-frame Exmor CMOS sensor",
      "5-axis in-body image stabilization",
      "Fast hybrid autofocus system",
      "Full HD 1080p video recording",
      "Wi-Fi and NFC connectivity",
    ],
  },
  {
    id: 11,
    brand: "Sony",
    model: "T100",
    categories: ["Equipment", "All"],
    image: stand,
    pricePerDay: 30,
    discount: 0,
    description: "Professional Camera Stand with Adjustable Height and 360° Rotation",
    technicalAdvantages: [
      "Adjustable Height",
      "360° Rotation",
      "Sturdy and Durable",
      "Quick-Release Plate",
      "Versatile Compatibility:",
    ],
  },
  {
    id: 12,
    brand: "Panasonic",
    model: "Pan 2",
    categories: ["Cameras", "All"],
    image: panasonic,
    pricePerDay: 10,
    discount: 0,
    description: "The Panasonic Pan2 is a mirrorless camera with outstanding image quality and advanced features. It delivers stunning results in a compact and lightweight body.",
    technicalAdvantages: [
      "24.3-megapixel full-frame Exmor CMOS sensor",
      "5-axis in-body image stabilization",
      "Fast hybrid autofocus system",
      "Full HD 1080p video recording",
      "Wi-Fi and NFC connectivity",
    ],
  },
  {
    id: 13,
    brand: "Canon",
    model: "500 D",
    categories: ["Cameras", "All"],
    image: canon2,
    pricePerDay: 40,
    discount: 0,
    description: "The Canon  500D is a versatile DSLR camera with advanced features. It offers high-resolution images and excellent low-light performance.",
    technicalAdvantages: [
      "18-megapixel APS-C CMOS sensor",
      "DIGIC 4 image processor",
      "9-point autofocus system",
      "Full HD 1080p video recording",
      "3.0-inch Clear View LCD screen",
    ],
  },
  {
    id: 14,
    brand: "Canon",
    model: "D 700",
    categories: ["Cameras", "All"],
    image: canon3,
    pricePerDay: 15,
    discount: 0,
    description: "The Canon EOS 550D is a versatile DSLR camera with advanced features. It offers high-resolution images and excellent low-light performance.",
    technicalAdvantages: [
      "18-megapixel APS-C CMOS sensor",
      "DIGIC 4 image processor",
      "9-point autofocus system",
      "Full HD 1080p video recording",
      "3.0-inch Clear View LCD screen",
    ],
  },
];
