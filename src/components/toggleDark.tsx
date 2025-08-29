
type Props = {
    handleToggle: () => void;
    isDark: boolean;
}
export default function ToggleDark({ handleToggle, isDark }: Props) {
    return (
        <button onClick={handleToggle} className="mt-4 p-2 border rounded">
            {isDark ? 'Light Theme' : 'Dark Theme'}
        </button>
    )
}