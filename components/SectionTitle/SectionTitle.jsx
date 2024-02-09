export const SectionTitle = ({ children, purple, className }) => {
  if (purple) {
    return (
      <h2 className={`text-2xl xl:text-3xl font-black ${
        purple ? "text-gradient-purple" : "text-gradient-green"
      } ${className}`}>
        {children}
      </h2>
    );
  }
  return (
    <h2 className={`text-2xl xl:text-4xl font-bold text-white -tracking-4 ${className}`}>
      {children}
    </h2>
  );
};
