export const SectionTitle = ({ children, purple, className }) => {
  if (purple) {
    return (
      <h2 className={`text-2xl xl:text-3xl font-extrabold ${
        purple ? "text-gradient-purple" : "text-gradient-green"
      } ${className}`}>
        {children}
      </h2>
    );
  }
  return (
    <h2 className={`font-bold text-2xl -tracking-2 xl:text-3xl xl:-tracking-3 xxl:text-4xl xxl:-tracking-4 ${className}`}>
      {children}
    </h2>
  );
};

export const SectionBody = ({ children, className }) => {
  return <p className={`text-md md:text-lg ${className}`}>{children}</p>;
}


export const PageTitle = ({ children, className }) => {
  return (
    <h1 className={`font-bold text-2xl -tracking-2 xl:text-3xl xl:-tracking-3 xxl:text-4xl xxl:-tracking-4 ${className}`}>
      {children}
    </h1>
  );
}