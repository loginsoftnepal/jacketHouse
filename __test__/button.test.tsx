import NavItem from "@/section/NavItem/NavItem";
import Searchbar from "@/section/Searchbar/Searchbar"
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
    it('should have Search Icon', () => {
        render(<Searchbar />);
        expect(screen.getByRole('button', {name: 'Search'})).toBeInTheDocument();
    })

    it('should have input with placeholder Search for anything', () => {
        render(<Searchbar />);
        expect(screen.getByPlaceholderText(/Search for anything.../)).toBeInTheDocument();
    })
})

describe('Behavior', () => {
   it('should have text Login', async () => {
        render(<NavItem />);
        const showTextButton = screen.getByRole('button', { name: /Login/});
        await userEvent.click(showTextButton);
    })
})