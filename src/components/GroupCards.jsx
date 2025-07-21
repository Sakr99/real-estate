import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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



const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fakeData);
  }, []);

  return (
    <section className="px-4 py-10 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/property/${item.id}`}
            className="block rounded-lg p-4 shadow-md border bg-white"
            id="properties"
          >
            <img
              src={item.image}
              className="h-56 w-full object-cover rounded-md"
              alt="property"
            />

            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">{item.price}</p>
              <p className="font-medium">{item.address}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs">
                <p className="text-gray-500">{item.parking}</p>
                <p className="font-medium">{item.bathroom}</p>
                <p className="font-medium">{item.bedroom}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default Cards;
