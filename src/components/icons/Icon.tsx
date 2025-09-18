import React from 'react';
import { icons, IconName } from './index';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    // This can happen if an invalid name is passed.
    // Returning null or a fallback is a good practice.
    return null;
  }

  return <SvgIcon {...props} />;
};

export default Icon;
