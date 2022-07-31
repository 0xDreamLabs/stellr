import React from 'react';
import ReactCollapsible from 'react-collapsible';
import { v4 as uuidv4 } from 'uuid';
import CollapsibleInterface from '../../interfaces/CollapsibleInterface';

const Collapsible = (props: CollapsibleInterface) => {
  const {
    collapsibleId, ariaLabel, trigger, transitionTime, open, children,
  } = props;
  const id = collapsibleId || uuidv4();
  let ariaProps = {};
  if (ariaLabel) {
    ariaProps = {
      'aria-label': ariaLabel,
    };
  } else {
    ariaProps = {
      'aria-labelledby': `${id}-collapsible`,
    };
  }
  return (
    <ReactCollapsible
      {...props}
      transitionTime={transitionTime || 200}
      trigger={
        trigger ? (
          <button type="button" aria-expanded={open} aria-controls={id} id={`${id}-collapsible`} className="w-full text-left">
            {trigger}
          </button>
        ) : ''
      }
    >
      {(open || open === undefined) && (
        <div role="region" id={collapsibleId} {...ariaProps}>
          {children}
        </div>
      )}
    </ReactCollapsible>
  );
};
export default Collapsible;
