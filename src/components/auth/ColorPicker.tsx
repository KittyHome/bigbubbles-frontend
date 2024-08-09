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
  return (
    <div className="flex flex-col items-center gap-y-1">
      <p className={Classname.Paragraph}>Color</p>
      <div className="grid w-full grid-cols-3 gap-1 rounded-xl bg-dark-light p-3.5">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="aspect-square rounded-md"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
