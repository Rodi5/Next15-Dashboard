import Image from 'next/image';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const reviews = [
    { name: 'Sarah Graves', comment: 'Highly recommend', rating: 5, img: '/img/notification/1.jpg' },
    { name: 'Garbease Sha', comment: 'Awesome Pro', img: '/img/notification/2.jpg' },
    { name: 'Gobetro Pro', comment: 'Great Website', img: '/img/notification/3.jpg' },
    { name: 'Siam Graves', comment: "That's Good", img: '/img/notification/4.jpg' },
    { name: 'Sarah Graves', comment: 'Highly recommend', img: '/img/notification/5.jpg' },
    { name: 'Julsha Grav', comment: 'Sei Hoise bro', img: '/img/notification/6.jpg' },
];

const Review = () => {
    return (
        <div className="max-w-sm md:max-w-lg bg-white p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Reviews</h2>
            <ul className="space-y-4">
                {reviews.map((review, index) => (
                <li key={index} className="flex items-center">
                    <div className="flex-shrink-0">
                        <Image className="rounded-full" src={review.img} alt={review.name} width={50} height={50}/>
                    </div>
                    <div className="ml-4 flex-1">
                        <h3 className="font-bold text-sm text-gray-800">{review.name}</h3>
                        <p className="text-sm" style={{color:'#303030'}}>{review.comment}</p>
                    </div>
                    <div className="flex space-x-0 sm:space-x-1">
                        <FaStar size={14} color='#ffb463'/>
                        <FaStar size={14} color='#ffb463'/>
                        <FaStar size={14} color='#ffb463'/>
                        <FaStar size={14} color='#ffb463'/>
                        <FaStarHalf size={14} color='#ffb463'/>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Review;
