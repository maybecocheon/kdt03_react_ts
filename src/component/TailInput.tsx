interface TailInputProps {
  type : string,
  name : string,
  ref : React.RefObject<HTMLInputElement>
}

export default function TailInput({type, name, ref} : TailInputProps) {
  return (
    <div>
      <input type={type} name={name} ref={ref} className="w-full h-full p-3 bg-white border border-black focus:outline-blue-600"/>
    </div>
  )
}
