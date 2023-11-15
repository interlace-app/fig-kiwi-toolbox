import { twMerge } from 'tailwind-merge';

export interface DataProps extends React.HTMLAttributes<HTMLDivElement> {
  isPre?: boolean;
}

export const Data = ({ className, children, isPre, ...props }: DataProps) => (
  <div
    className={twMerge(
      'flex px-3 py-2 overflow-y-auto text-sm rounded-md max-h-96 text-slate-700 bg-slate-100  break-words select-text cursor-text nodrag',
      className,
    )}
    {...props}
  >
    {isPre ? children : <p className="w-full">{children}</p>}
  </div>
);
