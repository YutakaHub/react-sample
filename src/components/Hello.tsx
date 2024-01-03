const Hello = () => {
  const onClick = () => {
    alert('Hello')
  }
  const text = 'hello, React'
  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

export default Hello