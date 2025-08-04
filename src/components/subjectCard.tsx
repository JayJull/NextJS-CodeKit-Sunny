'use client';
import { SubjectCardProps } from '../types';
import { Users, School, Edit, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import Badge from './badge';
import Button from './button';

const SubjectCard = ({
  id,
  thumbnail,
  title,
  category,
  studentCount,
  classroomCount,
  isAttached,
  isCertified,
  onEdit,
  onExams,
  className
}: SubjectCardProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString('id-ID');
  };

  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200",
      className
    )}>
      {/* Thumbnail */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 right-3 flex gap-2">
          {isCertified && (
            <Badge variant="info" className="bg-blue-600 text-white">
              ✓ CERTIFIED
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <span className="w-4 h-4 text-blue-600">📚</span>
              {category}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Students */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {formatNumber(studentCount)}
            </div>
            <div className="text-xs text-gray-500">Student</div>
          </div>

          {/* Classrooms */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <School className="w-4 h-4 text-orange-600" />
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {formatNumber(classroomCount)}
            </div>
            <div className="text-xs text-gray-500">Classrooms</div>
          </div>

          {/* Lesson Status */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div className={cn(
                "w-2 h-2 rounded-full",
                isAttached ? "bg-green-500" : "bg-gray-400"
              )} />
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {isAttached ? "✓" : "○"}
            </div>
            <div className="text-xs text-gray-500">
              {isAttached ? "Attached" : "Lesson"}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            icon={<Edit className="w-4 h-4" />}
            onClick={onEdit}
            className="flex-1"
          >
            Edit
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<FileText className="w-4 h-4" />}
            onClick={onExams}
            className="flex-1"
          >
            Exams
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;