import React from 'react'
import {Name} from './Person.types'

type PersonListProps = {
  names:Name[]
}
export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map(name =>{
        return(
          <h2>{name.first}{name.last}</h2>
        )
      })}
    </div>
  )
}
