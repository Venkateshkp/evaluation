import React from "react";
import Details from "./Details";
const Profile = () => {

    const [age, setAge] = React.useState(18);

    // const [state, setState] = React.useState({
    //     // state: false,
    //     divContainer: false,
    // })

    function changeAge(value){
        setAge(value);
    }
    // var handleChange = e => {
    //     this.setState({divContainer:!this.state.divContainer});
    // }

    // const x = this.state.divContainer;

    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVw8kQmyeJzUPlmduUzRqlFsKKlYA-eAgCzZtz1V7_v6abNwQKsWWE84zEs_A1lPcBmw&usqp=CAU" />
            <h1>Name: Venkatesh</h1>
            <h1>Age: {age}</h1>
            <button onClick={()=>changeAge(age+1)}>INCREASE AGE</button>
            <button onClick={()=>changeAge(age-1)}>DECREASE AGE</button><br></br>
            <button onClick={<Details/>}>SHOW DETAILS</button>
            {/* {
                x&&(
                    <div>
                        <h1>Location: Masai School</h1>
                        <h1>Organisation: Bengaluru</h1>
                    </div>
                )
            } */}
        </div>
    )
}

export default Profile;