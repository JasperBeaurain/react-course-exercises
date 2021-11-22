import React, {useState} from "react";
import Post from "./Post.component";

const Posts: React.FunctionComponent = () => {
    const [postId, setPostId] = useState<number>(1);

    return (
        <>
            <input
                type="number"
                value={postId}
                onChange={event => setPostId(+event.target.value)}
            />
            <Post postId={postId} />
        </>
    );
};

export default Posts;