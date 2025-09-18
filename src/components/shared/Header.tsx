import React from 'react'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

export default function Header() {
  return (
    <div>
      <MobileHeader />
      <DesktopHeader />
    </div>
  )
}