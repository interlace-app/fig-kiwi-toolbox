import * as Popover from '@radix-ui/react-popover';
import { rgbaToHex, rgbaToHsva } from '@uiw/color-convert';
import { Sketch } from '@uiw/react-color';
import { ChevronDown, MagnetIcon } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Color as IColor } from '../../kiwi/schema';
import { LinkPath, SupportedTypes } from '../../types';
import { IntRgbaToFractionRgba, fractionRgbaToIntRgba } from '../../utils';

export interface PropProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}
const Root = ({ className, children, name, ...props }: PropProps) => {
  return (
    <div
      className={twMerge('flex items-center justify-between', className)}
      {...props}
    >
      <p>{name}</p>
      <div className="flex gap-1">{children}</div>
    </div>
  );
};

const Values = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge('flex items-center gap-1', className)} {...props}>
    {children}
  </div>
);

const Value = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      'flex gap-1 h-full items-center px-2 py-0.5 rounded-md text-slate-900 bg-slate-100',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export interface PropItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: any;
  type: SupportedTypes;
  linkPath?: LinkPath;
  isLinkable?: boolean;
  //STUB - revisit this
  onValueChange?: (value: any) => void;
}
const Item = ({ type, ...props }: PropItemProps) => {
  switch (type) {
    case 'string':
      return <String type={type} {...props} />;
    case 'number':
      return <Number type={type} {...props} />;
    default:
      return <p>Unsupported type</p>;
  }
};

export interface PropStringProps extends PropItemProps {
  value: string | undefined;
}
const String = ({
  className,
  value,
  linkPath,
  isLinkable,
  ...props
}: PropStringProps) => {
  return (
    <Values {...props}>
      <Value>{value}</Value>
      {isLinkable && (
        <MagnetIcon size={16} className="cursor-pointer stroke-slate-400" />
      )}
      {isLinkable && (
        <Value>
          <ChevronDown
            size={16}
            onClick={() => {}}
            className="cursor-pointer stroke-slate-500"
          />
        </Value>
      )}
    </Values>
  );
};

export interface PropNumberProps extends PropItemProps {
  value: number | undefined;
}
const Number = ({
  className,
  value,
  linkPath,
  isLinkable,
  ...props
}: PropNumberProps) => {
  return (
    <Values {...props}>
      <Value>{value}</Value>
      {isLinkable && (
        <MagnetIcon size={16} className="cursor-pointer stroke-slate-400" />
      )}
      {isLinkable && (
        <Value>
          <ChevronDown
            size={16}
            onClick={() => {}}
            className="cursor-pointer stroke-slate-500"
          />
        </Value>
      )}
    </Values>
  );
};

export interface PropColorProps extends PropItemProps {
  value: IColor | undefined;
  onValueChange?: (color: IColor) => void;
}
const Color = ({
  className,
  value,
  linkPath,
  onValueChange,
  ...props
}: PropColorProps) => {
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);
  return (
    <Value {...props}>
      <div className="flex z-10 items-center gap-1 px-2 select-none py-0.5 rounded-md text-slate-700 bg-slate-100 relative">
        <p className="select-text">
          {value ? rgbaToHex(fractionRgbaToIntRgba(value)) : '?'}
        </p>
        <Popover.Root>
          <Popover.Trigger>
            {value && (
              <ChevronDown
                size={16}
                onClick={() => setIsShowColorPicker(!isShowColorPicker)}
                className="cursor-pointer stroke-slate-500"
              />
            )}
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="end"
              alignOffset={-8}
              sideOffset={8}
              className="z-50"
            >
              <Sketch
                className=""
                color={rgbaToHsva(fractionRgbaToIntRgba(value as IColor))}
                onChange={(c) =>
                  onValueChange &&
                  onValueChange(IntRgbaToFractionRgba(c.rgba as IColor))
                }
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </Value>
  );
};

export const Prop = {
  Root,
  Item,
  String,
  Number,
  Color,
};
