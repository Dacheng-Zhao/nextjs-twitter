import React, { SVGProps } from 'react'

interface Props {
    Icon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
    onClick?: () => {};
}

function SideBarRow({Icon, title, onClick}: Props) {
  return (
    <div onClick={() => onClick?.()} className='flex items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group'>
        <Icon className='h-6 w-6'/>
        <p className='group-hover:text-twitter hidden text-base font-light md:inline-flex lg:text-xl'>{title}</p> 
    </div>
  )
}

export default SideBarRow