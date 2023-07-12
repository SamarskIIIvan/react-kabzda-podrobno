
type TitlePropsType = {
    title: string
  }


export function Title(props:TitlePropsType){
    return(
      <>
     {props.title}
     </>
    )
  }
