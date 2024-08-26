/* eslint-disable no-unused-vars */

import { useState } from 'react'

import { pushParamsToUrl } from '@/utils/function'

const FilterDate = ({ options }: { options: { label: string; value: string }[] }) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value)
    pushParamsToUrl({ date: e.target.value })
  }

  return (
    <div className='flex flex-col gap-[0.5rem]'>
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
