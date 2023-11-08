import {CommentsItemsComponent} from "./commentsItemsComponent.jsx";
import {useGame} from "../useGame.jsx";

export function CommentsComposent(){
    const {comments} = useGame()

    return (
        <section className="bgColor py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold textColor ">Discussion (20)</h2>
                </div>
                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bgColor rounded-lg rounded-t-lg border borderColor ">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="6"
                                  className="px-0 w-full text-sm text-gray-900 border-0 bgColor focus:ring-0 focus:outline-none "
                                  placeholder="Write a comment..." required></textarea>
                    </div>
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Post comment
                    </button>
                </form>
                {comments.map((comment) => {
                    return(<CommentsItemsComponent comment={comment}/>)
                }
                )}


            </div>
        </section>
    )
}