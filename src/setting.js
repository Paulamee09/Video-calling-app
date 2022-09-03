import { createClient , createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId = "5c777f1bfebb46ffab9505fe933db585"
const token = "007eJxTYNCb9UHts8ma/a5Ckgpy/4WZboREvXVK1L3QoWKVEf1IJUGBwTTZ3Nw8zTApLTUpycQsLS0xydLUwDQt1dLYOCXJ1MJU96xA8ho5oeSGbX8YGRkgEMRnYchNzMxjYAAAxh8eww=="


export const config = {mode: "rtc" , codec: "vp8" , appId, token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";