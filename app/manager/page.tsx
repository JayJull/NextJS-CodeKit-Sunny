
import { DashboardLayout } from '@/layouts/dashboard-layout'
import React from 'react'

export default function DashboardOverview() {
  const user = {
    name: "Cihuy",
    role: "manager" as const,
    avatar: "https://example.com/avatar.jpg"
  }

  return (
    <DashboardLayout user={user}>
      <div className='text-2xl font-bold text-black'>Ahay</div>
    </DashboardLayout>
  )
}