import {useGame} from "../useGame.jsx";
import {useRef} from "react";

export function CommentsFormComponent(){
    const {game, sendComment} = useGame()
    const commentTextArea = useRef()
    async function onSubmit(e) {
        e.preventDefault()
        const comment = commentTextArea.current.value
        console.log("onSubmit", game, comment)
        sendComment(comment)
        commentTextArea.current.value = ""
    }
    return(
        <form className="mb-6">
            <div className="py-2 px-4 mb-4 bgColor rounded-lg rounded-t-lg border borderColor ">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment" rows="6"
                          ref={commentTextArea}
                          className="px-0 w-full text-sm text-gray-900 border-0 bgColor focus:ring-0 focus:outline-none "
                          placeholder="Write a comment..." required></textarea>
            </div>
            <button type="submit"
                    onClick={onSubmit}
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Post comment
            </button>
        </form>
    )
}