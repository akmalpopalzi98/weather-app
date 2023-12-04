type CurrentWeatherType = {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    main: string;
    icon: string;
  }[];
  dt: number;
};

export default CurrentWeatherType;
