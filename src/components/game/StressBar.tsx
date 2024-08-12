interface StressBarProps {
  percent: number;
}

const StressBar: React.FC<StressBarProps> = ({ percent }) => {
  return (
    <div className="absolute bottom-8 right-8 flex items-center">
      <p className="-rotate-90 text-lg font-bold uppercase italic text-white">Stress</p>
      <div className="relative h-64 w-12 rounded-t-lg bg-secondary-background">
        <div
          className="absolute bottom-0 left-0 w-full rounded-t-lg bg-stress-gradient"
          style={{
            height: `${percent}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StressBar;
