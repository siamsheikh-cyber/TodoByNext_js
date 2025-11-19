export const createBlog = async (formData: FormData) => {
    "use server"


    const Blog = {
        title: formData.get("title"),
        description: formData.get("description")
    }

    const res = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(Blog)
    })

    console.log(res);


}