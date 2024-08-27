// src/components/Tab.tsx
import Link from 'next/link'

import React from 'react'
import { Tooltip } from 'react-tooltip'

interface TabProps {
  path: string
  label: string
  icon: React.ReactNode
  isActive: boolean
  index: number
}

const Tab: React.FC<TabProps> = ({ path, label, icon, isActive, index }) => {
  return (
    <Link
      key={`navigate_${index}_${path}`}
      data-tooltip-id={`navigate_${index}_${path}`}
      href={path}
      className={`${isActive ? 'bg-[rgba(236,238,246)]' : 'hover:bg-[rgba(236,238,246)]'} group flex h-12 w-20 flex-col items-center justify-center rounded-t-lg`}
    >
      {icon}
      <Tooltip id={`navigate_${index}_${path}`} content={label} />
    </Link>
  )
}

export default Tab
