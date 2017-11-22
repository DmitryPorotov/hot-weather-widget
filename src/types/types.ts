type Activity = {
  img1: string,
  img2: string,
  address: string,
  phone: string,
  types: string[],
  title: string,
  weather: Weather,
  socInfo: SocialInfo
};

type Weather = {
  icon: string,
  water_temperature: number,
  air_temperature: number
};

type SocialInfo = {
  img: string,
  followers: number,
  following: number
};