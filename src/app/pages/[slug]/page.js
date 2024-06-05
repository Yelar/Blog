
import Data from '../../data.json';
const blogData = Data;

export default function BlogPost({params}) {
  const id = params.slug - 1;
  const blog = blogData;
  console.log(id);
  if (!(id >= 0 && id <= 4)) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className='flex items-center justify-center min-h-screen bg-gray-10'>
      <div className="max-w-4xl mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4">{blog[id].title}</h1>
      <p className="text-gray-600 mb-2">By {blog[id].author} on {new Date(blog[id].date).toLocaleDateString()}</p>
      <p className="text-gray-800">{blog[id].description}</p>
    </div>
    </div>
    
  );
}
export async function generateMetadata({ params }) {
  const id = Number(params.slug);
  
  console.log(id);
return {
  title: blogData[id].title,    
}
}