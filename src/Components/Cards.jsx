export const Card1 = ({ name, color, task, img }) => {
  return (
    <div className={color}>
      <img className='object-cover w-full h-56' src={img} alt='avatar'></img>

      <div className='py-5 text-center'>
        <a href='/' className='block text-2xl font-bold text-gray-800 '>
          {name}
        </a>
        <span className='text-sm text-gray-700 '>{task}</span>
      </div>
    </div>
  )
}
