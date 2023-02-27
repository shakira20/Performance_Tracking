import {render,screen,cleanup} from '@testing-library/react';
import DailyTrack from '../DailyTrack'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
test("should render daily track form",() =>{
    render(<DailyTrack/>);
    const daily = screen.getByTestId('dailytrack');
    expect(daily).toBeInTheDocument();
})