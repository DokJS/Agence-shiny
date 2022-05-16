import { sum } from "./Index";

test('function sum',()=>{
    const result = sum(10,5)
    expect(result).toBe(15)
})