import { setupServer } from "msw/node"
import { rest } from "msw"
import { render } from "../../Utils/test/Index";
import Results from './Index'
import { waitFor, screen, fireEvent } from "@testing-library/react";



const mockedResultsData = [
    {
        id:1,
        title: "First title",
        description: "First description"
    },
    {   
        id:2,
        title: "Second title",
        description: "Second description"
    },
]

const server = setupServer(

    rest.get('http://www.localhost:8000/results?a1=1&a2=1',(req,res,ctx)=>{

    return res(ctx.json({resultsData:mockedResultsData}))
    })
)


beforeAll(()=> server.listen())

afterEach(()=> server.resetHandlers())

afterAll(()=> server.close())

test("Data is properly displayed after API call", async ()=>{

    render(<Results/>)

    // Used for verify DOM content after call

    await waitFor(()=>{
    
        expect(screen.getByText("First title")).toBeTruthy()
        expect(screen.getByText("Second title")).toBeTruthy()
    })

})
