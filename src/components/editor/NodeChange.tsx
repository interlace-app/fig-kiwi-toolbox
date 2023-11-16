import { rgbaToHsva } from '@uiw/color-convert';
import { Sketch } from '@uiw/react-color';
import { twMerge } from 'tailwind-merge';
import { Color, NodeChange as INodeChange } from '../../kiwi/schema';

export interface NodeChangeProps extends React.HTMLAttributes<HTMLDivElement> {
  nodeChange: INodeChange;
  onChangeTest: (color: Color) => void;
}

export const NodeChange = ({
  className,
  nodeChange,
  onChangeTest,
  ...props
}: NodeChangeProps) => {
  const renderProp = (name: string, value?: string | number) => (
    <div className="flex items-center justify-between">
      <p>{name}</p>
      <p className="px-3 py-1 rounded-md text-slate-700 bg-slate-100">
        {value}
      </p>
    </div>
  );

  //STUB - just temporary
  const renderColor = (name: string, c: Color) => {
    return (
      <div className="flex items-center justify-between">
        <p>{name}</p>
        <Sketch
          color={rgbaToHsva({
            r: c.r * 255,
            g: c.g * 255,
            b: c.b * 255,
            a: c.a,
          })}
          onChange={(c) => {
            onChangeTest({
              r: c.rgba.r / 255,
              g: c.rgba.g / 255,
              b: c.rgba.b / 255,
              a: c.rgba.a,
            });
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={twMerge(
        'px-3 py-2 border flex-col border-slate-300 flex text-sm rounded-md gap-1',
        className,
      )}
      {...props}
    >
      {nodeChange.type && renderProp('Type', nodeChange.type)}
      {nodeChange.name && renderProp('Name', nodeChange.name)}
      {nodeChange.type === 'ROUNDED_RECTANGLE' &&
        nodeChange.fillPaints &&
        //@ts-expect-error
        renderColor('Fill', nodeChange.fillPaints[0]?.color)}
    </div>
  );
};
