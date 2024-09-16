import React from 'react'

function page({params}) {
    if(params.slug?.length===3){
      return <h1>Vieving first {params.slug[0]} and {params.slug[1] } and {params.slug[2]} </h1>
    }
    
    else if(params.slug?.length===2){
        return <h1>Vieving docs {params.slug[0]} and {params.slug[1]}</h1>
    }
    else if(params.slug?.length===1){
        return <h1>Vieving docs {params.slug[0]}</h1>
    }
    else{
        return <h1>Docs showing page</h1>
    }
 
  
}

export default page
