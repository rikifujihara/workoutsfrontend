import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="mx-auto px-4">
        <Link href="/" className="text-white text-2xl font-bold">
          Workouts.io
        </Link>
      </div>
    </div>
  );
}
