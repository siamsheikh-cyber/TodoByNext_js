import { ConnectToDB } from "@/lib/db";
import { Blog } from "@/model/blog/blog.model";



// SINGLE BLOG
export async function GET(request: Request, { params }: { params: { id: string } }) {
    await ConnectToDB()

    const { id } = await params

    const singleBlog = await Blog.findById({ _id: id })


    return Response.json(
        {
            status: "success",
            message: "single blog gotten",
            blog: singleBlog
        }
    )
}




// UPDATE BLOG
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await ConnectToDB()

    const { id } = await params

    const UpdateBlog = await Blog.findByIdAndUpdate(id, await request.json())

    return Response.json(
        {
            status: "success",
            message: "Update Blog success",
            data: UpdateBlog
        }
    )
}


// DELETE BLOG
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await ConnectToDB()

    const { id } = await params

    const DeleteBlog = await Blog.findByIdAndDelete(id)

    return Response.json(
        {
            status: "success",
            message: "Blog Deleted success",
            blog: DeleteBlog
        }
    )
}