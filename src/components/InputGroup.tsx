interface InputGroupProps {
    type: string;
    name: string;
    placeholder: string;
    showError?: boolean | undefined | string;
    icon?: React.ReactNode;
    onClick?: () => void;
    [key: string]: any;
}

export default function InputGroup ({type, name, placeholder, showError, icon, onClick, ...props}: InputGroupProps) {
    return (
        <div className={`input-group ${showError ? 'border-red-500' : ''}`}>
            <input
            type={type}
            name={name}
            placeholder={placeholder}
            className='input input-primary w-full'
            {...props}
            />
        </div>
    )
}
  