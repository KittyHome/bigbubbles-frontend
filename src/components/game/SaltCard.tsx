interface SaltCardProps {
  name: string;
  description: string;
  amount: number;
  imageUri: string;
  isActive: boolean;
}

const SaltCard: React.FC<SaltCardProps> = ({
  name,
  description,
  amount,
  imageUri,
  isActive,
}) => {
  return (
    <div className="w-20 rounded-2xl bg-salt-card-gradient p-[1px] shadow-saltcard">
      <div className="flex w-full flex-col items-center gap-y-2 bg-primary-saltcard p-3">
        <img src={imageUri} alt="Card image" className="w-full rounded-xl text-white" />
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default SaltCard;
