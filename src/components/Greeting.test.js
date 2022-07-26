import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// below is an anonomous func
// a testing "suit" 1st arg is a description
// 2nd arg is testing suit group/names
// this suit happens to hold only one test
// a large project will have many suits

    describe('Greeting component', () => {
        test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing
        
        // Assert
        const helloWorldElement = screen.getByText('Hello Wolrd!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see" you if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });
    test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();  
    });
});


