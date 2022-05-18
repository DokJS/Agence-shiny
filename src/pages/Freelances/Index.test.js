import { rest } from "msw";
import {setupServer} from 'msw/node';
import {screen, waitFor} from '@testing-library/react';
import { render } from "../../Utils/test/Index";

import Freelances from './Index';

const freelancersMockedData = [
    {
        name:"Harry Potter",
        job: "Magicien frontend",
        picture: ''
    },
    {
        name:"Hermione Granger",
        job: "Magicien fullstack",
        picture: ''
    },
]

const server = setupServer(

    rest.get('http://www.localhost:8000/freelances',(req,res,ctx)=>{

    return res(ctx.json({freelancersList:freelancersMockedData}))
    })
)


beforeAll(()=> server.listen())

afterEach(()=> server.resetHandlers())

afterAll(()=> server.close())

test("Loader is displayed during call", async ()=>{

    render(<Freelances/>)

    // Used for verify Loader is effectivly mounted during the call
    expect(screen.getByTestId('loader')).toBeTruthy()

    // Used for verify card's content after the call
     await waitFor(()=>{
        expect(screen.getByText("Harry Potter")).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
    })

})