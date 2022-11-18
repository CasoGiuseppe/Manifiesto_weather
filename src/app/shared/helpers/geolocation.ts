export const getCurrentLocation = async () => {
  if (navigator.geolocation) {
    return await navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
    });
  }
}

export const locator = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
