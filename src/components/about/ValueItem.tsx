interface ValueItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function ValueItem({ icon, title, description }: ValueItemProps) {
  return (
    <li className="flex items-start">
      <span className="material-symbols-outlined text-[#1173d4] mr-3 mt-1">
        {icon}
      </span>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
}