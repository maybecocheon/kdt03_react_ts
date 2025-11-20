import RouteNav from "./RouteNav"

export default function Header() {
  return (
    <header className='bg-blue-400 text-white w-full h-30 px-10'>
      <nav className='container mx-auto flex justify-between items-center'>
        <h1 className='font-extrabold text-4xl pt-5'>KDT React</h1>
        {/* space-x => 요소 사이의 공간을 제어 */}
        <ul className='flex justify-between items-end space-x-4'>
          <RouteNav />
        </ul>
      </nav>
    </header>
  )
}
