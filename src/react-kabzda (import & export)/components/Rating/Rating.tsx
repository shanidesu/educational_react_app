import React, {useState} from "react";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {

  let [grade, setGrade] = useState(props.value)
    return (
      <div>
        <Star selected={grade > 0}/><button onClick={() => setGrade(1)}>1</button>
        <Star selected={grade > 1}/><button onClick={() => setGrade(2)}>2</button>
        <Star selected={grade > 2}/><button onClick={() => setGrade(3)}>3</button>
        <Star selected={grade > 3}/><button onClick={() => setGrade(4)}>4</button>
        <Star selected={grade > 4}/><button onClick={() => setGrade(5)}>5</button>
      </div>
    )
}

type StarPropsType = {
  selected: boolean
}


function Star(props: StarPropsType) {
  if (props.selected) {
    return <span><b>Star </b></span>
  } else {
    return <span>Star </span>
  }

}
