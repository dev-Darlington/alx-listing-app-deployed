// components/property/ReviewSection.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import { ReviewProps } from "@/interfaces";
import Image from "next/image";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      
      try {
        setLoading(true);
        setError(null);
        
      
        const response = await axios.get(
  `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/properties/${propertyId}/reviews`
);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6">Guest Reviews</h3>
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#008489] mb-4"></div>
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6">Guest Reviews</h3>
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Guest Reviews</h3>
      
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id || index} className="border-b border-gray-200 pb-6">
              <div className="flex items-start mb-4">
                <Image 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">{review.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    {review.date && (
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    )}
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No reviews yet. Be the first to review this property!</p>
        </div>
      )}
      
      {/* Add Review Button */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="bg-[#008489] hover:bg-[#006a6d] text-white px-6 py-3 rounded-lg font-semibold transition">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;