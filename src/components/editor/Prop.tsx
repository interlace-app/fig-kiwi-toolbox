import * as Ariakit from '@ariakit/react';
import { rgbaToHex, rgbaToHsva } from '@uiw/color-convert';
import { Sketch } from '@uiw/react-color';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Color as IColor } from '../../kiwi/schema';
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
      {children}
    </div>
  );
};

export interface PropStringProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | undefined;
}
const String = ({ className, value, ...props }: PropStringProps) => {
  return (
    <div
      className={twMerge('flex items-center justify-between', className)}
      {...props}
    >
      <p className="px-2 py-0.5 rounded-md text-slate-700 bg-slate-100">
        {value}
      </p>
    </div>
  );
};

export interface PropNumberProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number | undefined;
}
const Number = ({ className, value, ...props }: PropNumberProps) => {
  return (
    <div
      className={twMerge('flex items-center justify-between', className)}
      {...props}
    >
      <p className="px-2 py-0.5 rounded-md text-slate-700 bg-slate-100">
        {value}
      </p>
    </div>
  );
};

export interface PropColorProps extends React.HTMLAttributes<HTMLDivElement> {
  value: IColor | undefined;
  onValueChange?: (color: IColor) => void;
}
const Color = ({
  className,
  value,
  onValueChange,
  ...props
}: PropColorProps) => {
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);
  return (
    <div
      className={twMerge('flex items-center justify-between', className)}
      {...props}
    >
      <div className="flex items-center gap-1 px-2 select-none py-0.5 rounded-md text-slate-700 bg-slate-100 relative">
        <p className="select-text">
          {value ? rgbaToHex(fractionRgbaToIntRgba(value)) : '?'}
        </p>
        <Ariakit.PopoverProvider>
          <Ariakit.PopoverDisclosure>
            {value && (
              <ChevronDown
                size={16}
                onClick={() => setIsShowColorPicker(!isShowColorPicker)}
                className="cursor-pointer stroke-slate-500"
              />
            )}
          </Ariakit.PopoverDisclosure>
          <Ariakit.Popover arrowPadding={0}>
            <Sketch
              className="absolute -right-4 top-2"
              color={rgbaToHsva(fractionRgbaToIntRgba(value as IColor))}
              onChange={(c) =>
                onValueChange &&
                onValueChange(IntRgbaToFractionRgba(c.rgba as IColor))
              }
            />
          </Ariakit.Popover>
        </Ariakit.PopoverProvider>
      </div>
    </div>
  );
};

export const Prop = {
  Root,
  String,
  Number,
  Color,
};
