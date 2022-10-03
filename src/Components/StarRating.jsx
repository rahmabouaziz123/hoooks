import React from 'react'
// import StarRating from 'react-bootstrap-star-rating';

const StarRatingp = ({rating ,handelRating}) => {


  const starts=(rating)=>{
   let tab=[]
   for(let i=1;i<=5;i++){
    if(i<=rating){
      tab.push(<span  className='etoil' style={{color:"gold"}} onClick={()=>handelRating(i)} > <b> ✰</b></span>)
    }
    else{
      tab.push(<span  className='etoil' style={{color:"Brown"}}  onClick={()=>handelRating(i)}  ><b> ✰</b></span>)
    }
   }
    return tab;
  }
  return (


    <div>
          {React.Children.toArray(starts(rating))}
    </div>
    // <div> <StarRating
    // defaultValue={rating}
    // min={0}
    // max={10}
    // step={0.5} /></div>
  )

  StarRatingp.defaultPropps={
    handelRating:()=>{ }
  }
}



export default StarRatingp