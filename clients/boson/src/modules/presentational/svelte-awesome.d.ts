declare module 'svelte-awesome' {
  interface IIconProps {
    data: any
    scale?: number
    spin?: boolean
    inverse?: boolean
    pulse?: boolean
    style?: string
    flip?: 'horizontal' | 'vertical'
    label?: string
    self?: any
  }
  export default function (props: IIconProps): any
}

declare module 'svelte-awesome/icons'
