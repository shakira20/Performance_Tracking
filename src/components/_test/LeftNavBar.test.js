import {render,screen,cleanup} from '@testing-library/react';
import LeftNavbar from '../LeftNavBar';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
test("should render daily track form",() =>{
    render(<LeftNavbar leftNavbar={undefined} data={[]} setLeftNavbar={undefined}/>);
    const daily = screen.getByTestId('menu');
    expect(daily).toBeInTheDocument();
})