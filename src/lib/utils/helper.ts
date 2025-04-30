type HeadOptions = {
  title?: string;
  description?: string;
  keywords?: string;
  [metaName: string]: string | undefined;
};

export function generateHead(options: HeadOptions) {
  const { title, description, keywords, ...rest } = options;

  return {
    meta: [
      ...(title ? [{ title }] : []),
      ...(description ? [{ name: "description", content: description }] : []),
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      ...(Object.entries(rest)
        .map(([key, value]) => (value ? { name: key, content: value } : null))
        .filter(Boolean) as { name: string; content: string }[]),
    ],
  };
}
