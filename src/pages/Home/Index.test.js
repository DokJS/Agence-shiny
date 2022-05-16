import Home from './Index';
import {render,screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('The Home component',()=>{

    it('should render properly title',()=>{

        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )
        // used for retrieve Home's title
        const homeTitle = screen.getByRole('heading',{level:1,
        text:"Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"})
        expect(homeTitle.textContent).toBe("Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents")
        
    })
})