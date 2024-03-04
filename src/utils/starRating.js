import { FaStar, FaStarHalf } from "react-icons/fa";


//star rating
export const convertToStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (rating > fullStars && rating <= fullStars + 0.5) {
      stars.push(<FaStarHalf key="half" className="text-yellow-400" />);
    } else if (rating > fullStars + 0.5) {
      stars.push(<FaStar key={fullStars} className="text-yellow-400" />);
    }
    return stars;
  };