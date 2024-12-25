import React from 'react'

export const CurlyBrace = () => {
let name ="zohaib"
  return (
    <div>
        <p>_________________________________________________________________________________________________</p>
        <p>2 * 2 = {2*2}</p> {/* use of JSX with curly braces*/ }
        <h1>Hi, {name}</h1> {/* we can simply renderd the JS variable into the html components using the curly braces*/}
    </div>
  )
}
export default  CurlyBrace;

