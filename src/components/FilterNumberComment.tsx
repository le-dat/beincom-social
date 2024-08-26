/* eslint-disable no-unused-vars */
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import useDebounce from '@/hooks/use-debounce'
import { pushParamsToUrl } from '@/utils/function'

const FilterNumberComment = () => {
  const [inputValue, setInputValue] = useState<number | ''>('')
  const router = useRouter()
  const debouncedValue = useDebounce(inputValue, 800)

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
      placeholder='Enter a number...'
    />
  )
}

export default FilterNumberComment
