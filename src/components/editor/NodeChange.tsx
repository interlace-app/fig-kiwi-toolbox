import { twMerge } from 'tailwind-merge';
import { Prop } from '.';
import { Color, NodeChange as INodeChange, NodeType } from '../../kiwi/schema';

export interface NodeChangeProps extends React.HTMLAttributes<HTMLDivElement> {
  nodeChange: INodeChange;
  onChangeTest: (color: Color) => void;
}

const typeColorMap = (type: NodeType) => {
  switch (type) {
    case 'FRAME':
      return {
        bg: 'bg-blue-700',
        text: 'text-white',
        border: 'border-blue-700',
      };
    default:
      return {
        bg: 'bg-slate-200',
        text: 'text-slate-600',
        border: 'border-slate-300',
      };
  }
};

export const NodeChange = ({
  className,
  nodeChange,
  onChangeTest,
  children,
  ...props
}: NodeChangeProps) => {
  if (!nodeChange.type) {
    return <></>;
  }
  const colors = typeColorMap(nodeChange.type);
  return (
    <div
      className={twMerge(
        'border-l flex-col border-slate-300 flex text-sm gap-1 mb-1',
        colors.border,
        className,
      )}
      {...props}
    >
      {nodeChange.type && (
        <div className={twMerge('px-1 py-0.5', colors.bg, colors.text)}>
          {nodeChange.type}
        </div>
      )}
      <div className="flex flex-col pl-1">
        <div className="flex flex-col gap-1 pl-1">
          {nodeChange.name && (
            <Prop.Root name="Name">
              <Prop.String value={nodeChange.name} />
            </Prop.Root>
          )}
          {/* {nodeChange.parentIndex && (
        <Prop.Root name="Parent index - position">
          <Prop.String value={nodeChange.parentIndex.position} />
          <Prop.String
            value={asciiToInt(nodeChange.parentIndex.position).toString()}
          />
        </Prop.Root>
      )} */}
          {nodeChange.fillPaints && nodeChange.fillPaints?.length > 0 && (
            <Prop.Root name="Fill">
              <Prop.Color
                value={nodeChange.fillPaints[0]?.color}
                onValueChange={onChangeTest}
              />
            </Prop.Root>
          )}
        </div>
        <div className="flex flex-col mt-2">{children}</div>
      </div>
    </div>
  );
};
