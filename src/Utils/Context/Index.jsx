import {createContext,useState} from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(nextTheme)
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}


export const SurveyContext = createContext();

export const SurveyProvider = ({children}) => {

    const [answers, setAnswers] = useState({})

    const addAnswer = currentAnswer => setAnswers({...answers,...currentAnswer})

    return (
        <SurveyContext.Provider value={{answers,addAnswer}}>
            {children}
        </SurveyContext.Provider>
    )
}