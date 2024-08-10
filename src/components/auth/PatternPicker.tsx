import { FaCheck } from 'react-icons/fa';

import { Classname } from '@/constants/classname';

import PatternImage1 from '/images/pattern/pattern1.png';
import PatternImage2 from '/images/pattern/pattern2.png';
import PatternImage3 from '/images/pattern/pattern3.png';
import PatternImage4 from '/images/pattern/pattern4.png';
import PatternImage5 from '/images/pattern/pattern5.png';
import PatternImage6 from '/images/pattern/pattern6.png';
import PatternImage7 from '/images/pattern/pattern7.png';
import PatternImage8 from '/images/pattern/pattern8.png';
import PatternImage9 from '/images/pattern/pattern9.png';
import { useState } from 'react';

const patterns = [
  PatternImage1,
  PatternImage2,
  PatternImage3,
  PatternImage4,
  PatternImage5,
  PatternImage6,
  PatternImage7,
  PatternImage8,
  PatternImage9,
];

const PatternPicker = () => {
  const [patIndex, setPatIndex] = useState<number>(0);

  const handlePatternClick = (index: number) => () => {
    setPatIndex(index);
  };

  return (
    <div className="flex flex-col items-center gap-y-1">
      <p className={Classname.Paragraph}>Pattern</p>
      <div className="grid w-full grid-cols-3 gap-0.5 rounded-xl  bg-dark-light p-3.5">
        {patterns.map((pattern, index) => (
          <div
            className="relative flex items-center justify-center"
            onClick={handlePatternClick(index)}
          >
            <img src={pattern} />
            {patIndex === index && (
              <span className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary-badge text-white">
                <FaCheck size={12} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternPicker;
