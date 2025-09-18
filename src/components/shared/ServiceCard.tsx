import Link from 'next/link';
import Card from './Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, href, delay }: ServiceCardProps) {
  const CardContent = () => (
    <Card delay={delay} hover={!!href} className="p-6 h-full">
      <div className="flex flex-col items-center gap-4 text-center h-full">
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-4 rounded-full border border-blue-700/50 shadow-lg">
          <span className="material-symbols-outlined text-blue-400 text-4xl">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
          <p className="text-slate-400 text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>
        {href && (
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mt-2 group-hover:text-blue-300 transition-colors">
            <span>Learn More</span>
            <span className="material-symbols-outlined text-lg transform group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}