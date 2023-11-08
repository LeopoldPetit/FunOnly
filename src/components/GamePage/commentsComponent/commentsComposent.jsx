import {CommentsItemsComponent} from "./commentsItemsComponent.jsx";
import {useGame} from "../useGame.jsx";
import {CommentsFormComponent} from "./commentsFormComponent.jsx";

export function CommentsComposent(){
    const {comments} = useGame()


    return (
        <section className="bgColor py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold textColor ">Discussion (20)</h2>
                </div>
                <CommentsFormComponent/>
                {comments.map((comment) => {
                    return(<CommentsItemsComponent key={comment.id} comment={comment}/>)
                }
                )}


            </div>
        </section>
    )
}