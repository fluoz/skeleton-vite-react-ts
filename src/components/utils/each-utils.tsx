import { Fragment } from "react";

interface EachUtilsProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const EachUtils = <T,>({ items, renderItem }: EachUtilsProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <Fragment key={index}>{renderItem(item, index)}</Fragment>
      ))}
    </>
  );
};

export default EachUtils;
