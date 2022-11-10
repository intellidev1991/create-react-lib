import React from 'react'

export interface IHello {
  text: string
}
export const Hello = ({ text }: IHello) => {
  return <div className="text">This is test text: {text}</div>
}
