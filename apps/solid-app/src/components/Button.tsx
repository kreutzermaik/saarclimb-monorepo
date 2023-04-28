/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, onClick }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
      <div>
        <button
            type="button"
            class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
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
  primary: boolean,
  /**
   * What background color to use
   */
  backgroundColor: string,
  /**
   * How large should the button be?
   */
  size: string,
  /**
   * SolidButton contents
   */
  label: string,
  /**
   * Optional click handler
   */
  onClick?: any,
}

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
