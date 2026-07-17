export default function AuthHeader({ eyebrow, title, description }) {
  return (
    <div className="text-center">
      <span
        className="
          text-sm font-black uppercase tracking-[0.2em] text-yellow-400
        "
      >
        {eyebrow}
      </span>

      <h1 className="mt-4 text-3xl font-black text-yellow-50">{title}</h1>

      <p className="mt-3 text-sm leading-6 text-yellow-50/70">{description}</p>
    </div>
  );
}
