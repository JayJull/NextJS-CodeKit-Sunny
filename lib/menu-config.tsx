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
  LaptopMinimalCheck,
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
  }
];

export const teacherMenuItems: MenuItem[] = [
  {
    id: "general",
    label: "GENERAL",
    children: [
      {
        id: "my-subject",
        label: "My Subject",
        icon: <BookOpen className="h-4 w-4" />,
        href: "/teacher/subject",
      },
      {
        id: "my-classes",
        label: "My Classroom",
        icon: <LaptopMinimalCheck className="h-4 w-4" />,
        href: "/teacher/classes",
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
        children: [
          {
            id: "grades",
            label: "Grades",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/school/grades",
          },
          {
            id: "classrooms",
            label: "Classrooms",
            icon: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
            href: "/manager/school/classrooms",
          },
        ],
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
