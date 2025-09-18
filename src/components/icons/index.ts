// This file acts as a central directory for all SVG icons, allowing for static imports.

import Airplane from './airplane.svg';
import Battery from './battery.svg';
import DefaultAudio from './default-audio.svg';
import DefaultVideo from './default-video.svg';
import Instagram from './instagram.svg';
import Readme from './readme.svg';
import Wifi from './wifi.svg';
import Youtube from './youtube.svg';

export const icons = {
  airplane: Airplane,
  battery: Battery,
  'default-audio': DefaultAudio,
  'default-video': DefaultVideo,
  instagram: Instagram,
  readme: Readme,
  wifi: Wifi,
  youtube: Youtube,
};

export type IconName = keyof typeof icons;
