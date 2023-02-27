import { createMemoryHistory } from '@remix-run/router';
import {render,screen,cleanup} from '@testing-library/react'
import { Router } from 'react-router-dom';
import LoginPage from '../LoginPage';
// import { createMemoryHistory } from '@remix-run/rou';
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
test('should render Login Page',()=>{
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
     <LoginPage/>
    </Router>
    );
    const login=screen.getByTestId('login');
    expect(login).toBeInTheDocument();
})