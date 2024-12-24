'use client'
import { useAuthState } from '@/lib/authState'
import React from 'react'

function page() {
  const {user} = useAuthState();
  console.log(user?.metadata)
  return (
    <div>page</div>
  )
}

export default page