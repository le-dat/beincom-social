import Image from 'next/image'

import SpinIcon from '@/icons/spinner.svg'

const Loading = () => {
  return (
    <div className='my-4 flex size-28 items-center justify-center'>
      <Image src={SpinIcon} alt='spinner-icon' width={56} height={56} className='object-contain' />
    </div>
  )
}

export default Loading
