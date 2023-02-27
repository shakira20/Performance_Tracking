import {render,screen,cleanup} from '@testing-library/react';
import StoreDetails from '../StoreDetails';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('should render store details list',()=>{
    render(<StoreDetails/>);
    expect(screen.getByTestId('store')).toBeInTheDocument();
})