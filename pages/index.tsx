import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard"; // Assume this component exists
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<PropertyProps[]>(`api/property/`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Hero Section */}
      <div className="w-full col-span-3 relative text-center text-white">
        <Image src="https://i.pinimg.com/1200x/36/0d/8c/360d8cb18671f3f4d3ae503260383b71.jpg" alt="Hero Image" width={1400} height={400} className="h-screen w-full"></Image>
        <div className="absolute top-0 left-0 bg-black/40 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </div>
      {/* Filter Section */}
      {/* Property Listings */}
      {properties.map((property: PropertyProps, index: number) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
}