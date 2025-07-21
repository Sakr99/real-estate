import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const fakeData = [
  {
    id: 1,
    price: "$100,000",
    address: "123 Wallaby Avenue, Park Road",
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1770&q=80",
    parking: "2 spaces",
    bathroom: "2 rooms",
    bedroom: "4 rooms",
  },
  {
    id: 2,
    price: "$200,000",
    address: "456 Elm Street, River Side",
    image:
      "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1742942286073&dpr=on,2.625",
    parking: "1 space",
    bathroom: "1 room",
    bedroom: "3 rooms",
  },
  {
    id: 3,
    price: "$300,000",
    address: "456 Elm Street, River Side",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlZo727G2zM_cq9fG5PcVHs4tyclyog_IaA&s",
    parking: "1 space",
    bathroom: "1 room",
    bedroom: "3 rooms",
  },
  {
    id: 4,
    price: "$400,000",
    address: "456 Elm Street, River Side",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPy5rLJIKxPkNrkrGN6qgzlI7TNcBkFinnw&s",
    parking: "1 space",
    bathroom: "1 room",
    bedroom: "3 rooms",
  },
];


const PropertyDetails = () => {
  const { id } = useParams();
  const property = fakeData.find((item) => item.id === parseInt(id));

  if (!property) return <p>لم يتم العثور على العقار</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto p-6">
        <img
          src={property.image}
          className="w-full h-64 object-cover rounded-lg"
          alt="Property"
        />
        <h2 className="text-2xl font-bold mt-4">{property.address}</h2>
        <p className="text-lg text-gray-600">{property.price}</p>

        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <p>
            <strong>Parking:</strong> {property.parking}
          </p>
          <p>
            <strong>Bathroom:</strong> {property.bathroom}
          </p>
          <p>
            <strong>Bedroom:</strong> {property.bedroom}
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
