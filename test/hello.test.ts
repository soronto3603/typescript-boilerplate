import "jest"
import { Hello } from "../lib/hello/hello"

describe("hello test..", ()=>{
  test("hello test..", ()=>{
    expect(new Hello().greeting()).toMatch("Hellowordl")
  })
})