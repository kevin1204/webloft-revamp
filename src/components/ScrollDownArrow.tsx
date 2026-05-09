'use client';

export default function ScrollDownArrow() {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center">
      <div className="animate-bounce-down">
        <svg 
          className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          onClick={handleScrollDown}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
