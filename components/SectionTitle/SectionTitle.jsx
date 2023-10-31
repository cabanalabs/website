export const SectionTitle = ({ children, purple, className }) => {
  return (
    <h2
      className={`text-2xl xl:text-3xl font-black ${
        purple ? "text-gradient-purple" : "text-gradient-green"
      } ${className}`}
    >
      {children}
    </h2>
  );
};
