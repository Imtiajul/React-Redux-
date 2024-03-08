const Button = ({ type, name, handler }) => {
  const style =
    type === "danger"
      ? "px-4 py-2 text-white bg-red-500 rounded-md"
      : "px-4 py-2 text-white bg-blue-700 rounded-md"

  return (
    <button className={style} onClick={handler}>
      {name}
    </button>
  )
}

export default Button
