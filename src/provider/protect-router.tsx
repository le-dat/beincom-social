'use client'

import { usePathname, useRouter } from 'next/navigation'

import { useEffect } from 'react'

import { ROUTES } from '@/constants/routes'
import { useUserStore } from '@/store/user.store'

const ProtectRouter = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  const router = useRouter()
  const { isAuthenticated } = useUserStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(ROUTES.LOGIN)
      return
    }
    if (pathName === ROUTES.LOGIN || pathName === ROUTES.REGISTER) {
      router.push(ROUTES.HOME)
      return
    }
  }, [isAuthenticated, pathName, router])

  return <>{children}</>
}

export default ProtectRouter
