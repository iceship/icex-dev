interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: BlogLayoutProps) {
  return (
    <div className="container relative">
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
}
