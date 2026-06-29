import { Button } from "react-bootstrap";

export interface GButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  variant:
    | "primary"
    | "secundary"
    | "secondary"
    | "primary-white"
    | "primary-outline"
    | "secundary-outline"
    | "success"
    | "outline-success"
    | "danger"
    | "outline-danger"
    | "outline-primary"
    | "outline-warning"
    | "none"
    | "warning";
  size?: "sm" | "lg";
  disabled?: boolean;
  disabledLoading?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export function GButton({
  type = "button",
  variant,
  size,
  disabled = false,
  disabledLoading = false,
  className,
  children,
  onClick,
}: Readonly<GButtonProps>) {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      disabled={Boolean(
        disabled || disabledLoading
      )}
      className={className}
      onClick={onClick}
    >
      {disabledLoading && (
        <span
          className="spinner-border spinner-border-sm mx-2"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {children}
    </Button>
  );
}
