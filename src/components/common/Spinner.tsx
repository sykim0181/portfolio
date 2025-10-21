interface Props {
  size?: number;
}

const Spinner = ({ size }: Props) => {
  return (
    <div
      style={{
        width: `${size ?? 100}px`,
        height: `${size ?? 100}px`,
      }}
      className="border-7 border-gray-300 border-t-gray-100 rounded-full animate-spin"
    />
  );
};

export default Spinner;
