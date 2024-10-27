interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <article className="prose prose-slate">{children}</article>
    </>
  );
}
