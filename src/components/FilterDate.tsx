/* eslint-disable no-unused-vars */
'use client'

import { useSearchParams } from 'next/navigation'

import { useEffect, useState } from 'react'

import { delay, pushParamsToUrl } from '@/utils/function'

const FilterDate = ({ options }: { options: { label: string; value: string }[] }) => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const searchParams = useSearchParams()
  const date = searchParams.get('date') ?? ''

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value)
    await delay(800)
    pushParamsToUrl({ date: e.target.value })
  }

  useEffect(() => {
    setSelectedValue(date)
  }, [date])

  return (
    <div className='flex gap-[0.5rem] gap-x-4 lg:flex-col'>
      {options.map((option, index) => (
        <label key={index} className='flex w-fit items-center gap-x-2 text-[14px] leading-[21px] text-[rgb(46,54,96)]'>
          <input type='radio' value={option.value} checked={selectedValue === option.value} onChange={handleChange} />
          {option?.label}
        </label>
      ))}
    </div>
  )
}

export default FilterDate
