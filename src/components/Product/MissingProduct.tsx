// Made by: Daniel
import React from 'react'
import { cn } from '../../lib/utils';
import Typography from '../Typography';

interface MissingProductProps extends React.InputHTMLAttributes<HTMLDivElement> {
    title?: string;
}

function MissingProduct({title="Ingen datovarer i dag...", className, ...props}: MissingProductProps) {
  return (
    <div className={cn("bg-white flex justify-center items-center p-8 border-2 rounded-xl border-[#E9E9EA]", className)} {...props}>
        <Typography className='text-primary-dark' variant="heading">{title}</Typography>
    </div>
  )
}

export default MissingProduct