export default function ColorizerButton({ title, clicked }) {
  return (
    <button
      onClick={clicked}
      className="cursor-pointer rounded-lg bg-zinc-800 px-4 py-2 font-semibold text-white transition hover:bg-zinc-700"
    >
      {title}
    </button>
  );
}
