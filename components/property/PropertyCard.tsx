import { PropertyProps } from "@/interfaces"
import Image from "next/image"


const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{property.name}</h2>
        <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{property.rating}</span>
        </div>
        <div className="mt-2">
          {property.category.map((cat: string, index: number) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-lg font-bold">${property.price}</p>
            {property.discount && (
              <p className="text-sm text-red-500">Discount: {property.discount}%</p>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default PropertyCard