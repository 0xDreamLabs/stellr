import React from 'react';
import { v4 as uuid } from 'uuid';
// we only accept rightToLeft as direction b/c by default we will go left to right.
export const Marquee = ({ reverse, marqueeText }:{ reverse?: boolean, marqueeText: string }) => {
  let animationClass = 'motion-safe:animate-marquee';
  if (reverse) {
    animationClass = 'motion-safe:animate-marquee-reverse';
  }
  return (
    <div className="font-semibold uppercase text-outline-marquee bg-primary-400 dark:bg-primary-dark-400 py-2 text-3xl text-white">
      <div id="marquee-container" className="flex flex-row overflow-x-hidden relative w-full">
        <div id="marquee" className={`flex flex-0-0-auto flex-row items-center min-w-full ${animationClass}`}>
          {[...Array(10)].map(() => {
            const id = uuid();
            return (
              (
                <span key={id}>
                  {marqueeText}
                  &nbsp;
                </span>
              )
            );
          })}
        </div>
        <div id="marquee-2" className={`flex flex-0-0-auto flex-row items-center min-w-full ${animationClass}-2`}>
          {[...Array(10)].map(() => {
            const id = uuid();
            return (
              <span key={id}>
                {marqueeText}
                &nbsp;
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Marquee;
