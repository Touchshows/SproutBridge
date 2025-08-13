import Link from 'next/link';
import { getAllCourseCategories } from '@/lib/data';

export default function Page() {
  const courseCategories = getAllCourseCategories();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">所有课程</h1>

      <div className="space-y-12">
        {courseCategories.map((category) => (
          <section key={category.category_id}>
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
              {category.category_title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.courses.map((course) => (
                <Link href={`/course/${course.id}`} key={course.id}>
                  <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={course.cover_url}
                      alt={`封面图片: ${course.title}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{course.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{course.level}</p>
                      <p className="text-sm text-gray-500 mt-2 truncate">{course.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
