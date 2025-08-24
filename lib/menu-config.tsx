import React from "react";
import {
  Users,
  BookOpen,
  CreditCard,
  Trophy,
  Calendar,
  School,
  UserCheck,
  Award,
  LayoutDashboard,
  FileText,
} from "lucide-react";
import { MenuItem } from "@/components/layout/sidebar-layout";

export const studentMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    children: [
      {
        id: "my-profile",
        label: "My Profile",
        icon: <Users className="h-4 w-4" />,
        href: "/student",
      },
      {
        id: "classroom",
        label: "Classroom",
        icon: <BookOpen className="h-4 w-4" />,
        href: "/student/classroom",
      },
      {
        id: "transactions",
        label: "Transactions",
        icon: <CreditCard className="h-4 w-4" />,
        href: "/student/transactions",
      },
    ],
  },
  {
    id: "extracurricular",
    label: "Extracurricular Activity",
    children: [
      {
        id: "community",
        label: "Community",
        icon: <Users className="h-4 w-4" />,
        href: "/student/community",
        badge: "New",
      },
      {
        id: "school-competition",
        label: "School Competition",
        icon: <Trophy className="h-4 w-4" />,
        href: "/student/competition",
      },
      {
        id: "school-events",
        label: "School Events",
        icon: <Calendar className="h-4 w-4" />,
        href: "/student/events",
        badge: "9+",
      },
    ],
  },
  {
    id: "about-school",
    label: "About School",
    children: [
      {
        id: "school-profile",
        label: "School Profile",
        icon: <School className="h-4 w-4" />,
        href: "/student/school-profile",
      },
      {
        id: "all-teachers",
        label: "All Teachers",
        icon: <UserCheck className="h-4 w-4" />,
        href: "/student/teachers",
      },
    ],
  },
];

export const teacherMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-4 w-4" />,
        href: "/teacher",
      },
      {
        id: "my-classes",
        label: "My Classes",
        icon: <BookOpen className="h-4 w-4" />,
        href: "/teacher/classes",
      },
      {
        id: "students",
        label: "Students",
        icon: <Users className="h-4 w-4" />,
        href: "/teacher/students",
      },
      {
        id: "assignments",
        label: "Assignments",
        icon: <FileText className="h-4 w-4" />,
        href: "/teacher/assignments",
      },
      {
        id: "schedule",
        label: "Schedule",
        icon: <Calendar className="h-4 w-4" />,
        href: "/teacher/schedule",
      },
      {
        id: "grades",
        label: "Grades",
        icon: <Award className="h-4 w-4" />,
        href: "/teacher/grades",
      },
    ],
  },
];

export const managerMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    children: [
      {
        id: "overview",
        label: "Overview",
        icon: <LayoutDashboard className="h-4 w-4" />,
        href: "/manager",
      },
      {
        id: "library",
        label: "Library",
        icon: <BookOpen className="h-4 w-4" />,
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
        icon: <School className="h-4 w-4" />,
        href: "/manager/school",
      },
      {
        id: "members",
        label: "Members",
        icon: <Users className="h-4 w-4" />,
        children: [
          {
            id: "teachers",
            label: "Teachers",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/member/teachers",
          },
          {
            id: "students",
            label: "Students",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/member/students",
          },
        ],
      },
      {
        id: "users",
        label: "Users",
        icon: <UserCheck className="h-4 w-4" />,
        children: [
          {
            id: "user list",
            label: "User List",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/user/user-lists",
          },
          {
            id: "assign role",
            label: "Assign Role",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/user/assign-roles",
          },
        ],
      },
      {
        id: "transactions",
        label: "Transactions",
        icon: <CreditCard className="h-4 w-4" />,
        href: "/manager/transactions",
      },
    ],
  },
];

export function getMenuItemsByRole(
  role: "manager" | "teacher" | "student"
): MenuItem[] {
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
