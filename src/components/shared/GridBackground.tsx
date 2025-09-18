import React from 'react'

export default function GridBackground() {
  return (
    <>
      <div className="absolute inset-0 top-0 w-full h-[36dvh] z-10 opacity-20 grid-background"></div>

      <style jsx>{`
        .grid-background {
          background-image:
            linear-gradient(rgba(38, 220, 38, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(38, 220, 38, 1) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: linear-gradient(to bottom, white 10%, transparent 50%);
          -webkit-mask-image: linear-gradient(to bottom, white 10%, transparent 50%);
        }
      `}</style>
    </>
  )
}