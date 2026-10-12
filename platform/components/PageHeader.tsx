interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary">{title}</h1>
      {description && <p className="mt-4 text-lg text-text-secondary">{description}</p>}
    </div>
  );
}
