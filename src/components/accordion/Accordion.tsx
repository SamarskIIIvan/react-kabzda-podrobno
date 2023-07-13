import { Title } from "../title/Title";

export type AccordionPropsType = {
  colapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

  if (props.colapsed === true) {
    return <h3> <Title title='Menu' /></h3>
  }
  if (props.colapsed === false) {
    return (
      <div>
        <h3> <Title title='Menu' /></h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        </div>

    )
  }
  return (
    <div>
      <h3> <Title title='Menu' /></h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </div>
  )

}

