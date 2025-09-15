interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  icon: string;
  href?: string;
  reversed?: boolean;
}

export default function CaseStudyCard({ 
  title, 
  category, 
  description, 
  imageUrl, 
  icon, 
  href = "#", 
  reversed = false 
}: CaseStudyCardProps) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
      {/* Image */}
      <div className={`md:col-span-2 ${reversed ? 'md:order-1' : ''} rounded-lg overflow-hidden border border-slate-700`}>
        <div 
          className="w-full aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
      </div>

      {/* Content */}
      <div className={`md:col-span-3 ${reversed ? 'md:order-2' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900/50 border border-blue-500/50">
            <span className="material-symbols-outlined text-blue-300 text-lg">
              {icon}
            </span>
          </div>
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            {category}
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">
          {title}
        </h3>
        
        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
          {description}
        </p>
        
        <a 
          href={href}
          className="inline-flex items-center text-sm font-bold text-blue-400 mt-4 group-hover:text-white transition-colors duration-300 cursor-pointer hover:underline"
        >
          View Details 
          <span className="material-symbols-outlined ml-1 transition-transform duration-300 group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}