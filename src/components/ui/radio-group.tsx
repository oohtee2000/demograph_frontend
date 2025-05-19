import * as React from "react";

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

// Define the shape of child props that we expect to add/override
interface RadioGroupItemChildProps {
  value: string;
  checked?: boolean;
  onChange?: () => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children, className }) => {
  return (
    <div className={className} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioGroupItemChildProps>(child)) {
          // child.props now has the expected type

          if (child.props.value) {
            return React.cloneElement(child, {
              checked: value === child.props.value,
              onChange: () => onValueChange(child.props.value),
            });
          }
        }
        return child;
      })}
    </div>
  );
};

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id, ...props }) => {
  return (
    <input
      type="radio"
      id={id}
      name="radio-group"
      value={value}
      className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300"
      {...props}
    />
  );
};
