import axios from "axios";

const get_background_image = async () => {
  const request = await axios.get("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: "Client-ID wZIRQnw7XaGOcE9ERzlHhUMffk9g8Y44uSecXoVIkp4",
    },
    params: {
      query: "sky",
    },
  });

  return request.data.urls.full;
};

export { get_background_image };
