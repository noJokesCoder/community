import { create } from 'zustand';
import { type OpenWeatherApi } from '@/types/openWeather';

type weatherStateType = {
    weather: OpenWeatherApi | null;
    setWeather: (weather: OpenWeatherApi) => void;
};

const useWeatherState = create<weatherStateType>(set => ({
    weather: null,
    setWeather: (weather: OpenWeatherApi) => set({ weather }),
}));

export default useWeatherState;
