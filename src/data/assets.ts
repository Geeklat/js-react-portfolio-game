import pointerSrc from '../assets/pointer_pixel.png'
import portraitSrc from '../assets/portrait_pixel.png'

// Keep asset selection centralized so revised artwork can be swapped without
// changing the components that render it.
export const artwork = {
  portraitSrc,
  detailSrc: portraitSrc,
  cursorSrc: pointerSrc,
}
