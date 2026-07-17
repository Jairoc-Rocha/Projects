import Container from "./Container";

export default function PageLayout({ children, centered = false }) {
  return (
    <main className="pt-32 md:pt-20">
      <section
        className={
          centered
            ? "flex min-h-[calc(100vh-128px)] items-center py-24 md:min-h-[calc(100vh-80px)]"
            : "py-24"
        }
      >
        <Container>{children}</Container>
      </section>
    </main>
  );
}
