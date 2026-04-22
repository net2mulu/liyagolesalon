import Image from "next/image";

export function ServiceCard({
  title,
  body,
  img,
}: {
  title: string;
  body: string;
  img: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] w-full cursor-pointer shadow-sm">
      {/* Background Image scaling on hover */}
      <Image 
        src={img} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
      />
      
      {/* Base gradient ensuring title legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500" />
      
      {/* Extra darken overlay on hover to make paragraph text very legible */}
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content wrapper pushed to the bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
        <h3 className="text-lg font-medium tracking-tight text-white line-clamp-1">
          {title}
        </h3>
        
        {/* CSS-only smooth height reveal using Grid */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-2 text-sm leading-6 text-white/80 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
              {body}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive top right chevron */}
      <div className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:text-black hover:scale-110">
        <span className="text-xl leading-none">›</span>
      </div>
    </div>
  );
}
