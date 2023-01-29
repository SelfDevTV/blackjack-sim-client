import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between p-4 bg-indigo-500">
      <div className="flex items-center">
        <svg
          className="w-8 h-8 fill-current text-white mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 9a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
        <Link href="/">
          <h1 className="text-white font-bold">Backjack Sim</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          href="/"
          className="bg-white hover:bg-gray-100 text-indigo-500 font-medium py-2 px-4 rounded-lg"
        >
          Home
        </Link>
        <Link
          href="/result"
          className="ml-4 bg-white hover:bg-gray-100 text-indigo-500 font-medium py-2 px-4 rounded-lg"
        >
          Result
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
