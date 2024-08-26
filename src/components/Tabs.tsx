import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Tooltip } from 'react-tooltip'

import { ROUTES } from '@/constants/routes'

import { CommunicateIcon, HomeIcon } from './ui/icon'

const pages = [
  { path: ROUTES.HOME, label: 'Newsfeed', icon: <HomeIcon /> },
  { path: ROUTES.COMMUNICATE, label: 'Communicate', icon: <CommunicateIcon /> },
]

const Tabs = () => {
  const params = useParams()

  return (
    <div className='flex items-center text-primary'>
      {pages.map((item, index) => {
        const isActive = item.path === params.path
        return (
          <Link
            key={`navigate_${index}_${item.path}`}
            data-tooltip-id={`navigate_${index}_${item.path}`}
            href={ROUTES.HOME}
            className={`${isActive ? 'bg-[rgba(236,238,246)]' : 'hover:bg-[rgba(236,238,246)]'} group flex h-12 w-20 flex-col items-center justify-center rounded-t-lg`}
          >
            {item.icon}
            <Tooltip id={`navigate_${index}_${item.path}`} content={item.label} />
          </Link>
        )
      })}
    </div>
  )
}

export default Tabs
