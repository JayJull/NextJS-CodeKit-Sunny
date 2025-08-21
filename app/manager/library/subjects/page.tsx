import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  CheckCircle,
  Edit,
  Plus,
  Trash2,
  UploadCloud,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function SubjectsPage() {
  const topics = [
    {
      id: 1,
      title: "Object Sketching",
      category: "Visual Design",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Armin Yeager",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 2,
      title: "Digital Domination",
      category: "Business Marketing",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Galang Vamos",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 3,
      title: "Linear Gameplan",
      category: "Mathematics",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Sakura Rose",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 4,
      title: "Learning Basics HTML",
      category: "Computer Science",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Raisa Nur",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 5,
      title: "Digital Domination",
      category: "Business Marketing",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Karina Mine",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
  ];

  return (
    <div className="p-4 sm:p-2 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Manage Topics
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View & update your topics
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-gray-200 w-full sm:w-auto"
          >
            <UploadCloud className="w-4 h-4 mr-2" />
            Import .CSV
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full sm:w-auto focus-visible:outline-none"
          >
            <Link href="topics/add">
              Add Topic <Plus className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {topics.map((topic) => (
        <Card key={topic.id} className="p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            {/* Thumbnail */}
            <div className="flex-shrink-0">
              <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-xs text-gray-600">Image</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Top Section */}
              <div className="flex items-start justify-between mb-3">
                {/* Title and Category */}
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600">{topic.category}</p>
                </div>

                {/* Centered Badge */}
                <div className="flex-1 flex justify-center  mt-4">
                  {topic.certified && (
                    <div className="flex items-center gap-1">
                      <BadgeCheck className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600 uppercase">
                        Certified
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 ml-4 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </div>

              {/* Horizontal Divider */}
              <hr className="border-gray-200 mb-3" />

              {/* Bottom Section - Stats Row Centered */}
              <div className="flex items-center justify-center gap-40 text-sm text-gray-600">
                <div className="flex flex-col items-center">
                  <span className="text-gray-500 mb-1">Classrooms</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{topic.classrooms}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-gray-500 mb-1">Teacher</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                    </div>
                    <span className="font-medium">{topic.teacher}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-gray-500 mb-1">Lesson</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Attached</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
