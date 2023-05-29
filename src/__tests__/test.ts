import { render, getByTestId} from "react-testing-library";

it("should load with initial state: true", () => {
    const { ThemeButton } = render(<App/>);
    const isDarkMode = getByTestId(ThemeButton, 'isDarkMode');
    expect(isDarkMode.testContent).toBe('true')
})