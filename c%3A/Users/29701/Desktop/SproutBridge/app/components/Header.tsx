import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SproutBridge
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">首页</Link>
          <Link href="/courses" className="text-gray-600 hover:text-blue-600">课程</Link>
          <Link href="/help" className="text-gray-600 hover:text-blue-600">帮助</Link>
        </nav>

        {/* Search and Profile */}
        <div className="flex items-center space-x-4">
           {/* We can add search bar and user profile icon here later */}
        </div>
      </div>
    </header>
  );
}