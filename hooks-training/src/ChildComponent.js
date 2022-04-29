import { MyContext } from "./MyContext";

export default function ChildComponent() {
    return(
      <MyContext.Consumer>
        {(color) => (
            <button>{color}</button>
        )}
      </MyContext.Consumer>
    )
  }