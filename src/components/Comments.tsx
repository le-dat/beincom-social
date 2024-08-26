'use client'

import Image from 'next/image'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import DefaultAvatar from '@/images/default-avatar.png'
import { IPost } from '@/types/post.type'

interface IProps {
  data: IPost
}

const Comments = ({ data }: IProps) => {
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className='m mt-4 flex flex-col gap-4'>
      {data?.comments?.map((item, index) => (
        <div key={`content_${index}`} className='flex items-center gap-4'>
          <Image src={DefaultAvatar} alt='avatar' width={40} height={40} className='rounded-full shadow-sm' />

          <div className='flex w-full flex-col rounded-lg bg-[rgba(248,248,251)] text-[rgba(46,54,96)]'>
            <div className='relative overflow-hidden px-4 py-3 transition-all duration-200'>
              <p className='text-neutral-60 break-word text-base font-normal'>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments
