import type { ReackNode } from 'react';

interface Props {
  children: ReackNode;
}

export const InputGroup = (props: Props) => {
  return (
    <div className="border-b-[1px] border-stone-200 pb-12 flex gap-5">
      {props.children}
    </div>
  );
};
