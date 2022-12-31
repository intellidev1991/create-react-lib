import React from 'react'
import s from './style.module.css'

interface Props {
  className?: string
}

const Button = ({ className, ...props }: Props) => {
  return <button {...props} className={className} />
}

export { Button }
