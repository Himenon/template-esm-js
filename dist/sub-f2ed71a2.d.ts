declare const thisIsSub: () => string;

declare const sub_thisIsSub: typeof thisIsSub;
declare namespace sub {
  export {
    sub_thisIsSub as thisIsSub,
  };
}

export { sub as s, thisIsSub as t };
