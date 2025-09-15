import TeamMember from './TeamMember';

interface TeamMemberData {
  name: string;
  position: string;
  imageUrl: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMemberData[];
  className?: string;
}

export default function TeamSection({ title, members, className = "" }: TeamSectionProps) {
  return (
    <div className={className}>
      <h3 className="text-[#1173d4] text-2xl font-bold leading-tight tracking-tight pb-6 pt-5">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {members.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}