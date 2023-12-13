import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  buttonKey: string;
  title?: string;
  classes?: string;
  children?: ReactNode;
}

const CustomButton = ({
  onClick,
  buttonKey,
  title,
  classes,
  children,
}: Props) => {
  return (
    <>
      <button
        key={buttonKey}
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
