export const addTwo = Component => {
  return (props) => {
    console.log(props)
    return <Component {...props} increment={2} />
  }
}