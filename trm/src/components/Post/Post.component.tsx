import React, {useEffect, useState} from "react";
import {fetchPost, Post as PostModel} from "./Posts.service";

interface PostProps {
    postId: number,
}

const Post: React.FunctionComponent<PostProps> = ({ postId }) => {

    const [post, setPost] = useState<PostModel | undefined>();

    useEffect(() => {
        fetchPost(postId).then(post => setPost(post));
    }, [postId]);

    return (
        <div>
            { post === undefined ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};

export default Post;