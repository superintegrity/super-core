declare module '@beyonk/svelte-carousel' {
  interface IProps {
    loop?: boolean
    perPage?: integer
    autoplay?: integer
    duration?: number
    easing?: string
    startIndex?: number
    draggable?: boolean
    multipleDrag?: boolean
    dots?: boolean
    controls?: boolean
    threshold?: number
    rtl?: boolean
  }
  export default function (props: IProps): any
}
