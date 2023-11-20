import { twMerge } from 'tailwind-merge';
import { Prop } from '.';
import { Color, NodeChange as INodeChange, NodeType } from '../../kiwi/schema';
import { LinkPath, SupportedTypes } from '../../types';
import { camalCaseToSentenceCase } from '../../utils/text';

export interface NodeChangeProps extends React.HTMLAttributes<HTMLDivElement> {
  nodeChange: INodeChange;
  onChangeTest: (color: Color) => void;
  parentLinkPath: LinkPath;
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
  parentLinkPath,
  children,
  ...props
}: NodeChangeProps) => {
  if (!nodeChange.type) {
    return <></>;
  }
  const colors = typeColorMap(nodeChange.type);
  const propsToShow: { name: string; type: SupportedTypes }[] = [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'cornerRadius',
      type: 'number',
    },
    {
      name: 'fontSize',
      type: 'number',
    },
  ];
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
          {propsToShow.map(
            (p) =>
              //@ts-expect-error
              nodeChange[p.name] != undefined && (
                <Prop.Root name={camalCaseToSentenceCase(p.name)} key={p.name}>
                  <Prop.Item
                    //@ts-expect-error
                    value={nodeChange[p.name]}
                    type={p.type}
                    linkPath={[...parentLinkPath, p.name]}
                  />
                </Prop.Root>
              ),
          )}
          {/* {nodeChange.parentIndex && (
        <Prop.Root name="Parent index - position">
          <Prop.String value={nodeChange.parentIndex.position} />
          <Prop.String
            value={asciiToInt(nodeChange.parentIndex.position).toString()}
          />
        </Prop.Root>
      )} */}
          {/* {nodeChange.fillPaints && nodeChange.fillPaints?.length > 0 && (
            <Prop.Root name="Fill">
              <Prop.Color
                value={nodeChange.fillPaints[0]?.color}
                linkPath={[...parentLinkPath, 'fill', 0]}
                onValueChange={onChangeTest}
              />
            </Prop.Root>
          )} */}
        </div>
        <div className="flex flex-col mt-2">{children}</div>
      </div>
    </div>
  );
};
