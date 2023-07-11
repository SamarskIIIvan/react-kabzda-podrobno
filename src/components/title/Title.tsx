
type TitlePropsType = {
    title: string
  }


export function Title(props:TitlePropsType){
    return(
     <h3>
     {props.title}
     </h3>
    )
  }
