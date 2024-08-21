import React from 'react'
import CheckIcon from '@icons/auth/check.svg'
import Logo from '@images/logo.webp'
import Image from 'next/image'

interface FeatureProps {
  icon: string
  title: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className='flex gap-4 text-white'>
    <Image src={icon} draggable={false} alt='check-icon' className='size-6 text-white' />
    <div className='space-y-1'>
      <div className='text-base font-semibold text-white'>{title}</div>
      <div className='text-sm font-normal text-white'>{description}</div>
    </div>
  </div>
)

interface FeatureType {
  title: string
  description: string
}

const Intro: React.FC = () => {
  const features: FeatureType[] = [
    {
      title: 'Social Community Platform',
      description: 'Beincom is the platform for building and engaging with communities.',
    },
    {
      title: 'Always Reach',
      description: "Contents created by communities are always distributed to all members' newsfeeds.",
    },
    {
      title: 'Quality Content',
      description: 'Read & Write with quality and earn rewards for each post.',
    },
    {
      title: 'Security',
      description: 'Rigorous account verification and security mechanisms using Web3 (Blockchain) technology.',
    },
  ]

  return (
    <div className='relative z-[1] mr-8 hidden w-[31.25rem] space-y-6 lg:mr-[124px] lg:block'>
      <Image src={Logo} draggable={false} alt='check-icon' className='h-[56px] w-[174px] text-white' />

      {features.map((feature, index) => (
        <Feature key={index} icon={CheckIcon} title={feature.title} description={feature.description} />
      ))}
    </div>
  )
}

export default Intro
