export const Button = ({ name, styles }) => {
  return (
    <div>
      <button
        className={
          'px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-500 hover:scale-105 focus:ring-indigo-300 focus:ring-opacity-80' +
          styles
        }
      >
        {name}
      </button>
    </div>
  )
}
