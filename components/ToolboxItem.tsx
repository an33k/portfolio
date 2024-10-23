import React, { Fragment } from 'react'
import TechIcons from './TechIcons'
import { twMerge } from 'tailwind-merge';

type Props = {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?:string;
  itemsWrapperClassName?:string;
}

const ToolboxItem = (props: Props) => {
  return (
    <div className={twMerge(props.className, 'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]')}>
      <div className={twMerge(props.itemsWrapperClassName, 'flex flex-none py-0.5 gap-6 pr-6')}>
        {[...new Array(2)].fill(0).map((_,idx) => (
          <Fragment key={idx}>
            {props.toolboxItems.map(item => (
              <div className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg' key={item.title}>
                <TechIcons component={item.iconType}/>
                <span className='font-semibold'>{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default ToolboxItem