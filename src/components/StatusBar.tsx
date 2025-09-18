import React from 'react';
import Icon from './icons/Icon';

// Accept time prop and display left-aligned time with right-aligned icons
interface StatusBarProps {
  time: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time }) => {
  return (
    <div className="absolute top-0 w-full flex justify-between px-4 pt-2 text-white text-base z-[1000]">
      <span>{time}</span>
      <div className="flex items-center space-x-3">
        <Icon name="airplane" className="h-5 w-5" />
        <Icon name="wifi" className="h-5 w-5" />
        <Icon name="battery" className="h-5 w-5" />
      </div>
    </div>
  );
};

export default StatusBar;
