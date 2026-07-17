export default function SectionTittle({ eyebrow, title, description }) {
  return (
    <div>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-black uppercase leading-tight text-yellow-50 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-yellow-50/70">
          {description}
        </p>
      )}
    </div>
  );
}
