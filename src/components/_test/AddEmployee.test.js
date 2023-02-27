import {render,screen,cleanup} from '@testing-library/react';
import AddEmployee from '../AddEmployee';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
test("should render add employee form",() =>{
    render(<AddEmployee/>);
    const employee = screen.getByTestId('add-employee');
    expect(employee).toBeInTheDocument();
})