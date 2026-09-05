type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  variant,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant ?? "primary"}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
}
