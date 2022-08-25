export type ToggleProps = {
  option: any;
  setOption:(newOption:any) => void;
  options: [any, any];
  option1Text?: string;
  option2Text?: string;
  toggleColor?: string;
  toggleBgColor?: string;
};
