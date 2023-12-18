import type { HTMLAttributes } from "react"
import MediumZoom from "react-medium-image-zoom"

import "react-medium-image-zoom/dist/styles.css"

export function Zoom({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <MediumZoom zoomMargin={100} classDialog="zoom-image">
      {children}
    </MediumZoom>
  )
}
