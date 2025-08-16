import { Suspense } from 'react'

import { iconMap } from './iconMap'

export const Icon = ({ name, width, height, className = '', ...props }) => {
  const SvgIcon = iconMap[name]

  if (!SvgIcon) {
    console.error(`"${name}" 아이콘은 등록되어있지 않습니다.`)
    return null
  }

  return (
    <Suspense fallback={null}>
      <SvgIcon width={width} height={height} className={className} {...props} />
    </Suspense>
  )
}
