interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: BlogLayoutProps) {
  return (
    <div>
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
}
