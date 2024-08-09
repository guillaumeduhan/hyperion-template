'use client';
import Logo from '@/components/Logo';
import UserItem from '@/components/UserItem';
import { useAppContext } from '@/contexts/user';

export default function Header() {
  const { user } = useAppContext();
  return <header className="px-4 py-3 border-b w-full flex items-center justify-between">
    <Logo text={false} />
    <UserItem {...{ user }} />
  </header>;
}