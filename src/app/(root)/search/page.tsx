'use client'
import { useSearchParams } from 'next/navigation'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import Post from '@/components/Post'
import Sidebar from '@/components/Sidebar'
import Empty from '@/components/ui/empty'
import postService from '@/service/post.service'
import { IPost } from '@/types/post.type'

const SearchPage = () => {
  const searchParams = useSearchParams()
  const content = searchParams.get('content') || ''
  const date = searchParams.get('date') || ''
  const numberComment = searchParams.get('number_of_comments') || ''

  const { data, refetch } = useQuery({
    queryKey: [`filter-post-${content}-${date}-${numberComment}`],
    queryFn: () => postService.filterPosts({ content, date, number_of_comments: numberComment }),
    enabled: false,
  })

  useEffect(() => {
    refetch()
  }, [refetch, content, date, numberComment])

  const Content = {
    empty: <Empty />,
    data: (
      <div className='flex flex-col gap-y-4'>
        {data?.data?.map((post: IPost, index: number) => <Post key={index} data={post} />)}
      </div>
    ),
  }

  return (
    <main className='grid w-screen grid-cols-[1fr_1.5fr_1fr] gap-x-6 px-5 pt-0 xl:gap-x-12 xl:px-11'>
      <Sidebar />
      {Content[data?.data?.length === 0 ? 'empty' : 'data']}
      <div />
    </main>
  )
}

export default SearchPage
