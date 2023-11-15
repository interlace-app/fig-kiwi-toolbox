import { twMerge } from 'tailwind-merge';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
}

export const Section = ({
  className,
  children,
  header,
  ...props
}: SectionProps) => (
  <div className={twMerge('flex flex-col gap-2', className)} {...props}>
    <p className="ml-2 font-semibold break-words select-text cursor-text nodrag">
      {header}
    </p>
    {children}
  </div>
);
