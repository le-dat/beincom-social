import { options } from '@/constants/filter'

import FilterDate from './FilterDate'
import FilterNumberComment from './FilterNumberComment'

const Sidebar = () => {
  return (
    <aside className='sticky top-[70px] z-10 flex h-fit grow items-center justify-center rounded-lg bg-white px-2 py-4 pt-6'>
      <FilterDate options={options} />
      <FilterNumberComment />
    </aside>
  )
}

export default Sidebar
