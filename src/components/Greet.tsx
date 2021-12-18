import React from 'react'
type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean
}
export default function Greet({name, messageCount = 0, isLoggedIn}:GreetProps) {
  // const {messageCount = 0} = props
  return (
    <div>
      <h1>{
      
      isLoggedIn ?
      `Hello ${name}! You have ${messageCount} unread messages`:"Hello guest user"}</h1>
    </div>
  )
}
