function WeatherIcon({ iconNumber, summary }) {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/ressources/weather_icons/set01/big/${iconNumber}.png`}
        alt={summary}
        draggable={false}
      />
    );
}
  
  export default WeatherIcon;