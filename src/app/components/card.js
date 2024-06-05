// components/Card.js
import Link from 'next/link';

export default function Card({ id, title, author, date, description }) {
  return (
    <Link href={`pages/${id}`} className="block bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4 hover:bg-gray-100 transition duration-200">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="text-sm text-gray-500 mb-4">
          <span>By {author}</span> | <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-700">{description}</p>
    </Link>
  );
}
