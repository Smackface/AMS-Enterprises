interface ContactInfoProps {
  icon: string;
  title: string;
  content: string;
  href?: string;
  isAddress?: boolean;
}

export default function ContactInfo({ icon, title, content, href, isAddress = false }: ContactInfoProps) {
  const ContentElement = href ? 'a' : 'p';
  const contentProps = href ? { href } : {};
  
  return (
    <div className={`flex items-${isAddress ? 'start' : 'center'} gap-4`}>
      <div className={`bg-[#233648] rounded-full p-3 flex items-center justify-center ${isAddress ? 'mt-1' : ''}`}>
        <span className="material-symbols-outlined text-white">{icon}</span>
      </div>
      <div>
        <p className="text-white font-medium">{title}</p>
        <ContentElement 
          className={`text-gray-400 text-sm ${href ? 'hover:text-[#1173d4] transition-colors' : ''}`}
          {...contentProps}
        >
          {content}
        </ContentElement>
      </div>
    </div>
  );
}