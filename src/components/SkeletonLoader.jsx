const SkeletonLoader = ({ type = 'text', className = '' }) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const typeClasses = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    card: 'h-48 w-full',
    circle: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24',
  };

  return <div className={`${baseClasses} ${typeClasses[type]} ${className}`}></div>;
};

export const SkeletonCard = () => {
  return (
    <div className="card space-y-4">
      <SkeletonLoader type="title" />
      <SkeletonLoader type="text" />
      <SkeletonLoader type="text" className="w-5/6" />
      <SkeletonLoader type="text" className="w-4/6" />
      <div className="flex gap-2 mt-4">
        <SkeletonLoader type="button" />
        <SkeletonLoader type="button" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
