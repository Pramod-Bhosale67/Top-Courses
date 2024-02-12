import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import React from "react";
import { toast } from "react-toastify";


function Card({course, likedCourse, setLikedCourse}){

    const clickHandler = () =>{
        if (likedCourse.includes(course.id)){
            // it means it is already liked, now we need to remove it from like
            setLikedCourse((prev) => 
                prev.filter((cid) =>(cid !== course.id))
            )
            toast.warning("Liked Removed");
        }else{
            // course is not liked, so we need to move it in liked  state
            if (likedCourse.length === 0){
                setLikedCourse([course.id]);
            }else{
                // if array contains some liked course, we need to keep those course along with new liked course
                setLikedCourse((prev) => [...prev, course.id]);
            }   

            toast.success("Liked !");
        }
    }


    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
            <div className="relative ">
                <img src={course.image.url}/>

                <div className="w-[40px] h-[40px] right-2 bottom-[-5] rounded-full bg-white absolute grid place-items-center">
                    <button onClick={clickHandler}>
                        {/* <FcLike fontSize="1.75rem"/> */}
                        {
                            likedCourse.includes(course.id) ? 
                            /* if it is liked we need to unlike, hence once unliked need a placeholder icon */
                            <FcLike fontSize="1.75rem"/>:

                            /* else need a normal icon to like it */
                            <FcLikePlaceholder fontSize="1.75rem"/>


                        }
                    </button>
                </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {course.description.length > 100 ? course.description.substr(0, 100): course.description}
                </p>
            </div>
            
        </div>
    );
}

export default Card;