import { useRouter } from 'next/router';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
}

export default function PageHeader({ title, showBackButton = true }: PageHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#111a22]/80 backdrop-blur-sm">
      <div className="flex items-center p-4">
        {showBackButton && (
          <button className="text-white" onClick={handleBack}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-8">
          {title}
        </h2>
      </div>
    </div>
  );
}