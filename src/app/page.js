import Image from "next/image";
import data from './data.json';
import Card from "./components/card";

const blogData = data;

export default function Home() {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Blog Posts</h1>
      {blogData.map((blog, index) => (
        <Card
          key={index}
          id={blog.id}
          title={blog.title}
          author={blog.author}
          date={blog.date}
          description={blog.description}
        />
      ))}
    </div>
    </div>
  );
}
