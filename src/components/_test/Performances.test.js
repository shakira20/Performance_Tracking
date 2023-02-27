import {render,screen,cleanup} from '@testing-library/react';
import Performances from '../Performances';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('should render performance list',()=>{
    render(<Performances/>);
    expect(screen.getByTestId('performance')).toBeInTheDocument();
})