import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const CardContent = () => (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-800 bg-[#111827]/50 p-6 text-center hover:border-blue-600 hover:bg-[#111827]/70 transition-all duration-300 cursor-pointer">
      <div className="bg-blue-900/30 p-3 rounded-full border border-blue-700">
        <span className="material-symbols-outlined text-blue-400 text-3xl">
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
        <p className="text-slate-400 text-base font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}