import React, { useState } from 'react'

export default () => {
    const [input, setInput] = useState('Hannah')
    const [isPal, setPal] = useState('is a palindrome')
    const checkPalindrome = event => {
        setPal(palindrome(input))
        console.log(JSON.stringify(Array(101)))
        event.preventDefault()
    }
    const palindrome = text => text.toLowerCase() === text.toLowerCase().split("").reverse().join("") ? "is a palindrome" : "isn't a palindrome"
    const multiples = () => [...Array(101).keys()].filter(i => i % 3 === 0 || i % 5 === 0)

    const hcf = (a, b) => a === 0 ? b : hcf(b % a, a)

    const findHCF = (num, arr) => {
        let positive = arr.length - num
        let result = arr[positive]
        for (let i = positive; i < arr.length; i++) {
            result = hcf(arr[i], result)
            console.log(result)
        }
        return result;
    }

    return (
        <div>
            <h1>Assessment</h1>
            <h2>Question 3</h2>
            <form onSubmit={checkPalindrome}>
                <input style={{ textAlign: 'right' }} type="text" value={input} onChange={e => setInput(e.target.value)} /> {isPal}
                <br />
                <input type="submit" />
            </form>
            <h2>Question 2</h2>
            {21 % 23}
            <div>
                findHCF(5, [2, 4, 6, 8, 10]) = {findHCF(5, [2, 4, 6, 8, 10])}
            </div>
            <div>
                findHCF(5, [2, 3, 4, 5, 6]) = {findHCF(5, [2, 3, 4, 5, 6])}
            </div>
            <div>findHCF(3, [-3, -1, 1, 3, 21]) = {findHCF(3, [-3, -1, 1, 3, 21])}</div>
            <div>
                findHCF(4, [-1, 4, 48, 12, 8]) = {findHCF(4, [-1, 4, 48, 12, 8])}
            </div>
            <div>
                findHCF(1, [-1, -2, -3, -4, 21]) = {findHCF(1, [-1, -2, -3, -4, 21])}
            </div>

            <h2>Question 1</h2>
            <div>{multiples().map((i) => <p>{i}</p>)}</div>
        </div>
    )
}