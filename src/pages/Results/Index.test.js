import { formatJobList, formatUserAnswer } from "./Index";

describe("function formatJobList",()=>{
    it('add  comma after title',()=>{
        const forecast = 'Backend,'
        expect(formatJobList('Backend',3,1)).toEqual(forecast)
    })
    
    it("don't add comma after title",()=>{
        const forecast = "Frontend"
        expect(formatJobList("Frontend",4,3)).toEqual(forecast)
    })
})


describe("function formatUserAnswers",()=>{

    it("return a string in params request form",()=>{
        const forecast ="a1=1&a2=1"
        expect(formatUserAnswer({1:true,2:true})).toEqual(forecast)
    })
    
    it("return an empty string",()=>{
        const forecast = ''
        expect(formatUserAnswer({})).toEqual(forecast)
    })
})