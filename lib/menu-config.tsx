import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  School,
  Users,
  UserCheck,
  CreditCard,
  Settings,
  FileText,
  Calendar,
  MessageSquare,
  BarChart3,
  Award,
  Clock,
  Bell,
} from "lucide-react";
import { MenuItem } from "@/components/layout/sidebar";

export const managerMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    icon: <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">General</div>,
    children: [
      {
        id: "overview",
        label: "Overview",
        icon: <LayoutDashboard className="h-5 w-5" />,
        href: "/manager/overview",
      },
      {
        id: "library",
        label: "Library",
        icon: <BookOpen className="h-5 w-5" />,
        children: [
          {
            id: "topics",
            label: "Topics",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/library/topics",
          },
          {
            id: "subjects",
            label: "Subjects", 
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/library/subjects",
          },
        ],
      },
      {
        id: "school",
        label: "School",
        icon: <School className="h-5 w-5" />,
        href: "/manager/school",
      },
      {
        id: "members",
        label: "Members",
        icon: <Users className="h-5 w-5" />,
        href: "/manager/members",
      },
      {
        id: "users",
        label: "Users",
        icon: <UserCheck className="h-5 w-5" />,
        href: "/manager/users",
      },
      {
        id: "transactions",
        label: "Transactions",
        icon: <CreditCard className="h-5 w-5" />,
        href: "/manager/transactions",
      },
    ],
  },
];

export const teacherMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    icon: <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">General</div>,
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
        href: "/teacher/dashboard",
      },
      {
        id: "my-classes",
        label: "My Classes",
        icon: <GraduationCap className="h-5 w-5" />,
        href: "/teacher/classes",
      },
      {
        id: "students",
        label: "Students",
        icon: <Users className="h-5 w-5" />,
        href: "/teacher/students",
      },
      {
        id: "assignments",
        label: "Assignments",
        icon: <FileText className="h-5 w-5" />,
        href: "/teacher/assignments",
      },
      {
        id: "schedule",
        label: "Schedule",
        icon: <Calendar className="h-5 w-5" />,
        href: "/teacher/schedule",
      },
      {
        id: "grades",
        label: "Grades",
        icon: <Award className="h-5 w-5" />,
        href: "/teacher/grades",
      },
      {
        id: "attendance",
        label: "Attendance",
        icon: <Clock className="h-5 w-5" />,
        href: "/teacher/attendance",
      },
    ],
  },
];

export const studentMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    icon: <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">General</div>,
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
        href: "/student/dashboard",
      },
      {
        id: "my-courses",
        label: "My Courses",
        icon: <BookOpen className="h-5 w-5" />,
        href: "/student/courses",
      },
      {
        id: "assignments",
        label: "Assignments",
        icon: <FileText className="h-5 w-5" />,
        href: "/student/assignments",
      },
      {
        id: "schedule",
        label: "Schedule",
        icon: <Calendar className="h-5 w-5" />,
        href: "/student/schedule",
      },
      {
        id: "grades",
        label: "Grades",
        icon: <Award className="h-5 w-5" />,
        href: "/student/grades",
      },
      {
        id: "messages",
        label: "Messages",
        icon: <MessageSquare className="h-5 w-5" />,
        href: "/student/messages",
      },
      {
        id: "progress",
        label: "Progress",
        icon: <BarChart3 className="h-5 w-5" />,
        href: "/student/progress",
      },
    ],
  },
];

export function getMenuItemsByRole(role: "manager" | "teacher" | "student"): MenuItem[] {
  switch (role) {
    case "manager":
      return managerMenuItems;
    case "teacher":
      return teacherMenuItems;
    case "student":
      return studentMenuItems;
    default:
      return [];
  }
}