import Card from "./Index";
import { fireEvent, render,screen } from "@testing-library/react";

describe("test Card component",()=>{
    
    test("Card uses the image's url received by props",()=>{

        render(<Card  picture={'http://www.localhost/myPicture.png'} />)

        // Used for retrieve the value src attribute
        const cardImage = screen.getByRole('img')
        expect(cardImage.src).toBe('http://www.localhost/myPicture.png')
    })

    test('name is displayed when he is passed as props',()=>{

        render(<Card name={'Omar'}/>)
        const cardName = screen.getByText('Omar')
        const forecast = 'Omar'
        expect(cardName.textContent).toEqual(forecast)

    })

    test("Title changes when user click on th card",()=>{

        render(<Card name={"Omar"}/>)
        
        const forecast = "⭐️Omar⭐️"
        const cardTitle = screen.getByText("Omar")
        const card = cardTitle.closest('div') // for retrieve the div parent
        
        fireEvent.click(card) // trigger the click
        expect(cardTitle.textContent).toBe(forecast)
    })
})