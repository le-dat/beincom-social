/* eslint-disable no-unused-vars */
'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect, useState } from 'react'

import useDebounce from '@/hooks/use-debounce'
import { pushParamsToUrl } from '@/utils/function'

const FilterNumberComment = () => {
  const [inputValue, setInputValue] = useState<number | ''>('')
  const router = useRouter()
  const debouncedValue = useDebounce(inputValue, 800)
  const searchParams = useSearchParams()
  const numberOfComments = searchParams.get('number_of_comments') ?? 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : parseInt(e.target.value, 10)
    setInputValue(value)
  }

  useEffect(() => {
    if (debouncedValue !== '') {
      pushParamsToUrl({ number_of_comments: debouncedValue })
    }
  }, [debouncedValue, router])

  return (
    <input
      type='number'
      value={inputValue}
      onChange={handleChange}
      className='rounded border p-2'
      placeholder={numberOfComments ? numberOfComments : 'Enter a number...'}
    />
  )
}

export default FilterNumberComment
