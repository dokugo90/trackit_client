

import React from 'react'
import { VerticalDividerProps } from '../interfaces/interfaceTypes'

function VerticalDivider({ height }: VerticalDividerProps) {
  return (
    <span
        aria-hidden="true"
        className={`block h-[24px] w-px rounded-full bg-gray-200`}
      ></span>
  )
}

export default VerticalDivider