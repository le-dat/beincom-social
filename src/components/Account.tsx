import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useId, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Tooltip } from 'react-tooltip'
import { toast } from 'sonner'

import { ROUTES } from '@/constants/routes'
import DefaultAvatar from '@/images/default-avatar.png'
import authService from '@/service/auth.service'
import { useUserStore } from '@/store/user.store'
import { TokenStorage } from '@/utils/local-storage'

const Account = () => {
  const id = useId()
  const route = useRouter()
  const [showAccount, setShowAccount] = useState(false)
  const { setUser } = useUserStore()
  const toggleShowAccount = () => setShowAccount((prev) => !prev)
  const { mutateAsync, isPending } = useMutation({ mutationFn: authService.logout })

  const handleLogout = async () => {
    if (isPending) return
    await mutateAsync(
      { refreshToken: TokenStorage.getRefreshToken()! },
      {
        onSuccess: (response) => {
          setUser(null)
          TokenStorage.clearToken()
          route.push(ROUTES.LOGIN)
          toast.success(response.message)
        },
        onError: (error) => {
          console.error(error)
          toast.error(error.message)
        },
      }
    )
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative flex h-12 w-20 items-center justify-end'>
        <button onClick={toggleShowAccount} data-tooltip-id={id} className='overflow-hidden rounded-full shadow-md'>
          <Image src={DefaultAvatar} draggable={false} alt='logo-mini' className='size-[28px]' />
          {!showAccount && <Tooltip id={id} content='Your profile' delayShow={200} style={{ fontSize: 12 }} />}
        </button>

        {showAccount && (
          <div className='absolute right-0 top-[120%] w-[358px] rounded-md border bg-white p-[1rem] text-[rgba(46,54,96)] shadow-xl'>
            <button
              disabled={isPending}
              onClick={handleLogout}
              className='w-full p-2 transition-all hover:bg-[rgba(248,248,251)] disabled:cursor-not-allowed disabled:opacity-50'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Account
