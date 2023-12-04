const useLocation = () => {
  if (navigator.geolocation) {
    // Geolocation is supported
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        return { latitude, longitude };
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    // Geolocation is not supported
    console.error("Geolocation is not supported by your browser");
  }
};
export { useLocation };
