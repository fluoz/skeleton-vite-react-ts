type RenderIfProps = {
  condition: boolean;
  children: React.ReactNode;
};

export const RenderIf = ({ condition, children }: RenderIfProps) => {
  return condition ? <>{children}</> : null;
};
