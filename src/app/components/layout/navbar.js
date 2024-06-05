import Link from 'next/link';
export default function navbar() {
        return (
            <nav className="flex items-center justify-between p-4 bg-white shadow-md">
              <div className="text-3xl font-semibold text-gray-800">
                <a href="#">N! Incubator</a>
              </div>
              <div className="flex items-center justify-end w-full space-x-4 lg:w-auto text-blue-900 hover:text-indigo-600">
                <Link href="/">
                  Home
                </Link>
              </div>
            </nav>
          );
}