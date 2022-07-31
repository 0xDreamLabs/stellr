import React from 'react';

const Elo = ({formattedClassName}: { formattedClassName: string }) => {
  return (
    <svg
      className={`${formattedClassName}`}
      viewBox="0 0 780 500"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M55 14h670c22.1 0 40 17.9 40 40v391c0 22.1-17.9 40-40 40H55c-22.1 0-40-17.9-40-40V54c0-22.1 17.9-40 40-40z"
        fill="none"
        stroke="currentColor"
        strokeWidth="30"
      />
      <path
        d="M167.5 186.6c6.7-2.2 13.9-3.5 21.4-3.5 32.6 0 59.8 23.2 66 53.9l46.2-9.4c-10.6-52.3-56.8-91.6-112.2-91.6-12.7 0-24.9 2.1-36.3 5.9l14.9 44.7zM113 336.3l31.2-35.3a67.32 67.32 0 0 1-22.7-50.5c0-20.1 8.8-38.1 22.7-50.4L113 164.8c-23.7 21-38.6 51.6-38.6 85.7s14.9 64.8 38.6 85.8zM254.8 264c-6.3 30.7-33.4 53.8-66 53.8-7.5 0-14.7-1.2-21.4-3.5l-15 44.7c11.4 3.8 23.6 5.9 36.3 5.9 55.4 0 101.5-39.3 112.2-91.5l-46.1-9.4zM454.8 295.6c-7.6 7.4-18 11.9-29.4 11.8-7.8-.1-15.1-2.5-21.2-6.4l-15.3 24.4c10.5 6.6 22.8 10.5 36.1 10.7 19.4.3 37-7.3 49.9-19.9l-20.1-20.6zm-27.7-99.2c-38.5-.6-70.3 30.2-70.9 68.8-.2 14.5 4 28 11.3 39.2L494 250.3c-7.1-30.5-34.2-53.4-66.9-53.9m-41.9 74.2c-.2-1.6-.3-3.3-.2-5 .4-22.7 19.1-40.9 41.8-40.5 12.4.2 23.3 5.8 30.8 14.6l-72.4 30.9zm148.5-105.7v134.9l23.4 9.7-11.1 26.6-23.1-9.6c-5.2-2.3-8.7-5.7-11.4-9.6-2.6-4-4.5-9.4-4.5-16.7V164.9h26.7zM618.1 227.2c4.1-1.4 8.5-2.1 13-2.1 19.9 0 36.5 14.1 40.3 32.9l28.2-5.7c-6.5-31.9-34.7-55.9-68.5-55.9-7.7 0-15.2 1.3-22.1 3.6l9.1 27.2zm-33.2 91.4l19.1-21.5c-8.5-7.5-13.9-18.5-13.9-30.8s5.4-23.2 13.9-30.8L584.9 214c-14.5 12.8-23.6 31.5-23.6 52.3 0 20.8 9.1 39.5 23.6 52.3zm86.5-44.1c-3.8 18.7-20.4 32.9-40.3 32.9-4.6 0-8.9-.7-13-2.1l-9.1 27.3c7 2.3 14.4 3.6 22.2 3.6 33.8 0 62-24 68.5-55.9l-28.3-5.8z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Elo;
