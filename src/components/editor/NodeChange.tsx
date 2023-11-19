import { twMerge } from 'tailwind-merge';
import { Prop } from '.';
import { Color, NodeChange as INodeChange } from '../../kiwi/schema';
import { asciiToInt } from '../../utils';

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
  return (
    <div
      className={twMerge(
        'px-3 py-2 border flex-col border-slate-300 flex text-sm rounded-md gap-1',
        className,
      )}
      {...props}
    >
      {nodeChange.type && (
        <Prop.Root name="Type">
          <Prop.String value={nodeChange.type} />
        </Prop.Root>
      )}
      {nodeChange.name && (
        <Prop.Root name="Name">
          <Prop.String value={nodeChange.name} />
        </Prop.Root>
      )}
      {nodeChange.parentIndex && (
        <Prop.Root name="Parent index - position">
          <Prop.String value={nodeChange.parentIndex.position} />
          <Prop.String
            value={asciiToInt(nodeChange.parentIndex.position).toString()}
          />
        </Prop.Root>
      )}
      {nodeChange.fillPaints && nodeChange.fillPaints?.length > 0 && (
        <Prop.Root name="Fill">
          <Prop.Color
            value={nodeChange.fillPaints[0]?.color}
            onValueChange={onChangeTest}
          />
        </Prop.Root>
      )}
    </div>
  );
};
