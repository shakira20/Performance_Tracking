import {render,screen,cleanup} from '@testing-library/react';
import AddStore from '../AddStore';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
test("should render add store form",() =>{
    render(<AddStore/>);
    const store = screen.getByTestId('add-store');
    expect(store).toBeInTheDocument();
})