import Footer from "./Index";
import { fireEvent, render, screen } from "@testing-library/react";
import {ThemeProvider} from '../../Utils/Context/Index'

describe('Footer', ()=>{
    test('should render without crash', async ()=>{
        render(
            <ThemeProvider>
                <Footer/>
            </ThemeProvider>
        )
        // used for retrieve header's button
        const toggleButton = screen.getByRole('button');
        expect(toggleButton.textContent).toBe('Passez en mode 🌙')
        fireEvent.click(toggleButton)
        expect(toggleButton.textContent).toBe('Passez en mode ☀️')
    })
})