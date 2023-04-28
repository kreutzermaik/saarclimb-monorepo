/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, backgroundColor, color, size = "medium", label, onClick }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
      <div>
        <button
            type="button"
            class={[`${backgroundColor} ${color} storybook-button`, `storybook-button--${size}`, mode].join(' ')}
            onClick={onClick}
        >
          {label}
        </button>
      </div>
  );
};

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean,
  /**
   * What text color to use
   */
  color?: string,
  /**
   * What background color to use
   */
  backgroundColor?: string,
  /**
   * How large should the button be?
   */
  size?: string,
  /**
   * SolidButton contents
   */
  label: string,
  /**
   * Optional click handler
   */
  onClick?: any,
}