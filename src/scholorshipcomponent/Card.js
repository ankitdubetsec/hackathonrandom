import React from "react"

// import Scholorship from "../../../server/models/Scholorship";
function Card(props) {
  // console.log(props.user.degree)
  console.log(props.data)
    const [sch, setsch] = React.useState({})
     
    // React.useEffect(async()=>{
    // console.log("effect rendered")

    // console.log("effect rendered")
    
        // fetch(`https://api.imgflip.com/get_memes`)
        // .then(res =>res.json())
        // .then(data=>setImage(data))
    React.useEffect(()=>async()=>{
       
        try {
            const response = await fetch(`http://localhost:5000/api/scholorship/fetchscholorship`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json  = await response.json()
            setsch(json)
           
        } catch (error) {
            console.log(error);
        }
      },[])
    
      console.log(sch);
      const cardss = sch.scholorship
      ? sch.scholorship.map((element) => {
        // if(element.date!="Always Active"&&element.date!=""){
        // let dateString = element.date;
        // console.log(dateString)
        // let dateParts = dateString.split('/'); // Split the date string by '/'
        // let month = parseInt(dateParts[0], 10);
        // console.log(month)
        // }
       
        function transfer(e){
            // props.setuser()
            // console.log(element.id)
            // console.log(element.title)
            // console.log(element.date)
            // console.log(element.funds)

           
        //    props.setuser(
        //     prevstate=>{
        //         return(
        //             {
        //                 ...prevstate,
        //                 Title:e.target.innerHTML
        //             }
        //         )
        //     }
        // )
           
    
        }
        // console.log(props.user)
                   
          if (element.degrees ===props.data.Degree && element.location ===props.data.Country) {
            return (
              <div class="ag-format-container" key={element.id} >
                <div class="ag-courses_box" >
                  <div class="ag-courses_item" >
                    <a href="#" class="ag-courses-item_link" >
                      <div class="ag-courses-item_bg"></div>
    
                      <div class="ag-courses-item_title"onClick={transfer}>{element.title}</div>
    
                      <div class="ag-courses-item_date-box" >
                        Deadline:
                        <span class="ag-courses-item_date">{element.date}</span>
                        <br></br>
                        <br></br>
                        Funds:
                        <span class="ag-courses-item_date">{element.funds}</span>
                        <br></br>
                        <br></br>
                        <i class="fa-solid fa-location-dot"> {element.location}</i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          } else {
            // Return null for elements that don't match the condition
            return null;
          }
        })
      : null;
    
    return <div>{cardss}</div>;
      
    //   const cardss=sch.scholorship.map((element)=>{
    //     return(
    //         <div className="content">
    //         <section className="info-boxes">
    //             <div className="info-box">
    //                 <div className="box-icon">
    //                     <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         width={24}
    //                         height={24}
    //                         viewBox="0 0 24 24"
    //                     >
    //                         <path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-1H5V5h14v14z" />
    //                         <path d="M10.381 12.309l3.172 1.586a1 1 0 0 0 1.305-.38l3-5-1.715-1.029-2.523 4.206-3.172-1.586a1.002 1.002 0 0 0-1.305.38l-3 5 1.715 1.029 2.523-4.206z" />
    //                     </svg>
    //                 </div>
    //                 <div className="box-content">
    //                     <span className="big">44.51</span>
    //                     Current price ($)
    //                 </div>
    //             </div>
    //             {/* <button type="button" onClick={handleSubmit}>Submit</button> */}

    //         </section>

    //     </div>
    //     )
    //   })

    // fetch(`localhost:5000/api/scholorship/fetchscholorship`)
    //     .then(res => res.json())
    //     .then(data => {
    //         // do something with data
    //         console.log("hello");
    //     })
    //     .catch(rejected => {
    //         console.log(rejected);
    //         // console.log("jjkk");
    //     });

    // func();
    //   },[])
    //   console.log(sch.data.memes[0].name)

    // const [cardss, setcards] = React.useState(sch)
    // console.log(sch)

    // const cardelements=cardss.map(thing=>(

    //             <Cards

    //             />

    //     )
    // )
    return (
       <div className="uppercont">
        {cardss}
        </div>
    )
}
export default Card