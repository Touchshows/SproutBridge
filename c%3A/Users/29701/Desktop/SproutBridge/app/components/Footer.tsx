import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} SproutBridge. All Rights Reserved.</p>
        <div className="mt-4">
          <Link href="/about" className="text-gray-400 hover:text-white mx-2">关于我们</Link>
          |
          <Link href="/contact" className="text-gray-400 hover:text-white mx-2">联系我们</Link>
          |
          <Link href="/privacy" className="text-gray-400 hover:text-white mx-2">隐私政策</Link>
        </div>
      </div>
    </footer>
  );
}