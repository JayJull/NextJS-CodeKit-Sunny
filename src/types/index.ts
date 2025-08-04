export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'manager' | 'teacher' | 'student';
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  badge?: string | number;
  children?: MenuItem[];
}

export interface StatsCardPops {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconColor?: string;
  valuePrefix?: string;
  iconBg?: string;
}

export interface UserListItemProps {
  avatar: string;
  name: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  actions?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface SubjectCardProps {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  studentCount: number;
  classroomCount: number;
  isAttached: boolean;
  isCertified: boolean;
  onEdit?: () => void;
  onExams?: () => void;
  className?: string;
}

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  onChange?: (value: string) => void;
  className?: string;
  autoFocus?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}