export default function AuthCard({ children }) {
  return (
    <div
      className="
        mx-auto w-full max-w-md rounded-4xl border border-yellow-400/20
        bg-zinc-950 p-8
      "
    >
      {children}
    </div>
  );
}
