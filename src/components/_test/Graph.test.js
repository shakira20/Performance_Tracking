import {render,screen,cleanup} from '@testing-library/react';
import Gragh from '../Graph';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('should render graph',()=>{
    render(<Gragh/>);
    expect(screen.getByTestId('graph')).toBeInTheDocument();
})
