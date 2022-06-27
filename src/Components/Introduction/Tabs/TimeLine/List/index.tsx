interface ListProps {
    date: string,
    company: string,
    office: string,
    desp: string
}


export function List (props: ListProps){
    return(
        <li>
        <span>{props.date}</span>
        <div className="content">
          <h3>{props.company} | <strong>{props.office}</strong></h3>
          <p>
            {props.desp}
          </p>
        </div>
      </li>
    )
}