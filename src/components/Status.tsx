import { twMerge } from 'tailwind-merge';

export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Status = ({ className, ...props }: StatusProps) => (
  <div
    className={twMerge(
      'flex break-words select-text cursor-text nodrag justify-center px-3 py-2 text-sm text-green-700 text-center bg-green-100 rounded-md',
      className,
    )}
    {...props}
  />
);
