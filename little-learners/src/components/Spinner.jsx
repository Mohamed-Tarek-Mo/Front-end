import  ClipLoader  from "react-spinners/ClipLoader"
const overRide = {
  display: "block",
  margin: "100px auto",
 
  
  
}
const Spinner = ({loading}) => {
  return (
    <ClipLoader
    color="#4f46e5"
    loading={loading}
    cssOverride={overRide}
    size={150}
    />
  )
}

export default Spinner