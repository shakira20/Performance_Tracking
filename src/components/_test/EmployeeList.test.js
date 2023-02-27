import {render,screen,cleanup} from '@testing-library/react';
import EmployeeList from '../employeeList';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('should render employee list',()=>{
    render(<EmployeeList/>);
    expect(screen.getByTestId('employeelist')).toBeInTheDocument();
})