import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  key: string;
  title?: string;
  classes?: string;
  children?: ReactNode;
}

const CustomButton = ({ onClick, key, title, classes, children }: Props) => {
  return (
    <>
      <button
        key={key}
        title={title}
        className={"btn " + classes}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
