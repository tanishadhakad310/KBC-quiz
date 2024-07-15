import { useState ,useEffect,useMemo} from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const[questionNumber,setQuestionNumber]=useState(1)
  const[stop,setStop]=useState(false)
  const[earned,setEarned]=useState("$ 0")
  const[username,setUsername]=useState(null)

  const data=[
    {
      id:1,
      question:"Rolex is a company that specializes in what type of products?",
      answers:[
        {
          text:"phone",
          correct:false
        },
        {
          text:"watches",
          correct:true
        },
        {
          text:"clothes",
          correct:false
        },
        {
          text:"furniture",
          correct:false
        }
        
      ]
    },
    {
      id:2,
      question:"Who is the president of India",
      answers:[
        {
          text:"Pratibha Patil",
          correct:false
        },
        {
          text:"Narendra Modi",
          correct:false
        },
        {
          text:"Draupadi Murmur",
          correct:true
        },
        {
          text:"Amit Shah",
          correct:false
        }
      ]

    },
    {
      id:3,
      question:"What is the capital of France",
      answers:[
        {
          text:"Berlin",
          correct:false
        },
        {
          text:"Madrid",
          correct:false
        },
        {
          text:"Paris",
          correct:true
        },
        {
          text:"Rome",
          correct:false
        }
      ]

    },
    {
      id:4,
      question:"Who wrote the play 'Hamlet'? ",
      answers:[
        {
          text:" Charles Dickens",
          correct:false
        },
        {
          text:"William Shakespeare",
          correct:true
        },
        {
          text:"Jane Austen",
          correct:false
        },
        {
          text:"Mark Twain",
          correct:false
        }
      ]

    },
    {
      id:5,
      question:"What is the largest planet in our solar system",
      answers:[
        {
          text:"Jupiter",
          correct:true
        },
        {
          text:"Earth",
          correct:false
        },
        {
          text:"Saturn",
          correct:false
        },
        {
          text:"Mars",
          correct:false
        }
      ]

    },
    {
      id:6,
      question:"Who painted the Mona Lisa?",
      answers:[
        {
          text:"Vincent van Gogh",
          correct:false
        },
        {
          text:"Pablo Picasso",
          correct:false
        },
        {
          text:"Leonardo da Vinci",
          correct:true
        },
        {
          text:"Claude Monet",
          correct:false
        }
      ]

    },
    {
      id:7,
      question:"What is the main ingredient in traditional Japanese miso soup",
      answers:[
        {
          text:"tofu",
          correct:false
        },
        {
          text:"Miso paste",
          correct:true
        },
        {
          text:"seaweed",
          correct:false
        },
        {
          text:"rice",
          correct:false
        }
      ]

    },
    {
      id:8,
      question:"What is the main ingredient in traditional Japanese miso soup",
      answers:[
        {
          text:"tofu",
          correct:false
        },
        {
          text:"Miso paste",
          correct:true
        },
        {
          text:"seaweed",
          correct:false
        },
        {
          text:"rice",
          correct:false
        }
      ]

    },
    {
      id:7,
      question:"What is the main ingredient in traditional Japanese miso soup",
      answers:[
        {
          text:"tofu",
          correct:false
        },
        {
          text:"Miso paste",
          correct:true
        },
        {
          text:"seaweed",
          correct:false
        },
        {
          text:"rice",
          correct:false
        }
      ]

    }
  ]
  const moneyPyramid=useMemo(()=>
    [
      {id:1,amount:"$100"},
      {id:2,amount:"$200"},
      {id:3,amount:"$400"},
      {id:4,amount:"$800"},
      {id:5,amount:"$1000"},
      {id:6,amount:"$2000"},
      {id:7,amount:"$4000"},
      {id:8,amount:"$8000"},
      {id:9,amount:"$16000"},
      {id:10,amount:"$32000"},
      {id:11,amount:"$50000"},
      {id:12,amount:"$64000"},
      {id:13,amount:"$100000"},
      {id:14,amount:"$150000"},
      {id:15,amount:"$200000"}
    ].reverse(),
  [])
  

  useEffect(()=>{{/*this useEffect is used to show the amount won when we give the wrong answer*/}
     questionNumber>1 && 
     setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount)
  },[moneyPyramid,questionNumber])
  return (
    <div className="app">
      {username? (
        <>
      <div className="main">
        {stop?(<h1 className="endText">You earned {earned}</h1>
        ):(
      <>{/*fragment*/}{/*jab bohot sare div ho toh unhe fragments k andar kardo*/}
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </>)}{/*when there are too many divs use fragments*/}
      </div>
      <div className="pyramid">
        <ul className="moneyList ">
          {moneyPyramid.map((m)=>(
          <li className={questionNumber===m.id?"moneyListItem active":"moneyListItem"} >
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>))}
          
          
        </ul>
      </div>
      </>
      ):(
       <Start setUsername={setUsername} />
      )}
      
    </div>
  );
}

export default App;
