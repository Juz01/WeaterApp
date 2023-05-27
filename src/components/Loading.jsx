
const loadingStyle = {
  backgroundImage: `url("https://cdn.icon-icons.com/icons2/459/PNG/128/weather_43796.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "200px",
  width: "200px"
}

const Loading = () => {
  return (
    <h1 style={loadingStyle} className="loading"> 
    </h1>
  )
}

export default Loading