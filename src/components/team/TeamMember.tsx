interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function TeamMember({ name, position, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <div 
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div>
        <p className="text-white text-lg font-medium leading-normal">
          {name}
        </p>
        <p className="text-[#92adc9] text-sm font-normal leading-normal">
          {position}
        </p>
      </div>
    </div>
  );
}