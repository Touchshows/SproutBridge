import Link from 'next/link';

// Dummy data for courses - replace with your actual data fetching
const courses = [
  { id: 1, title: 'Introduction to React', description: 'Learn the fundamentals of React.' },
  { id: 2, title: 'Advanced CSS', description: 'Master modern CSS techniques.' },
  { id: 3, title: 'Next.js for Beginners', description: 'Build powerful server-rendered apps.' },
];

// Dummy data for categories
const categories = ['Web Development', 'Data Science', 'Design', 'Business'];

export default function HomePage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <Link href={`/category/${category.toLowerCase()}`} className="text-blue-600 hover:underline">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-8">
        {/* Banner */}
        <div className="bg-blue-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome to SproutBridge</h1>
          <p className="text-lg">Your journey to knowledge begins here.</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <Link href={`/course/${course.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}