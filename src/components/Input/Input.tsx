
import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({type = '', name ='',...props}, ref) => {
  return (
    <>
      <label htmlFor={name}>{props.label}</label>
      <input type={type} name={name} ref={ref} {...props}/>
    </>
  )
}
)