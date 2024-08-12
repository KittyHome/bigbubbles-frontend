import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import { Classname } from '@/constants/classname';

const colors = [
  '#35C8B1',
  '#EC6363',
  '#FEC578',
  '#F37A6F',
  '#D881B6',
  '#816AAE',
  '#5464AE',
  '#57C4C7',
  '#65C295',
];

const ColorPicker = () => {
  const [colorIndex, setColorIndex] = useState<number>(0);

  const handleColorClick = (index: number) => () => {
    setColorIndex(index);
  };

  return (
    <div className="flex flex-col items-center gap-y-1">
      <p className={Classname.Paragraph}>Color</p>
      <div className="grid w-full grid-cols-3 gap-1 rounded-xl bg-dark-light p-3.5">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="flex aspect-square items-center justify-center rounded-md"
            onClick={handleColorClick(index)}
          >
            {colorIndex === index && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-badge text-white">
                <FaCheck size={12} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
