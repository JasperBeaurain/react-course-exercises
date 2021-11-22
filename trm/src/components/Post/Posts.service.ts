export interface Post {
    id: number,
    userId: number,
    title: string,
    body: string,
}

export const fetchPost = async (postId: number): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await response.json();
};