import { IMG_URL } from "../utils/constants";

const ResCards = (props) => {
    const {name,avgRating ,cloudinaryImageId}=props.resData.info;
    // console.log(props);
    // const {resData}= props;
    // console.log(resData,"resdata")
    // console.log(props)
    return (
      <>
        <div className="mt-10 mx-6 h-[400px] w-[180px] bg-gray-500">
          <div className="w-150px p-4">
            <img
              className="w-full"
              src={IMG_URL+ cloudinaryImageId }
              alt=""
            />
          </div>
  
          <ul className="text-lg ml-2">
            <li>{name}</li>  
            <li>cusines</li>
            <li>{avgRating}</li>
          </ul>
        </div>
      </>
    );
  };
export default ResCards;  

export const withPromotedLabel=(ResCards)=>{
  return (props)=>{
    return(
      <>
       <label className="bg-black text-white absolute m-4 p-2 rounded-lg ">Promoted</label>
       <ResCards {...props}/></>
     
    )
  }
}