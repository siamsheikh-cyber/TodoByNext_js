import { ConnectToDB } from "@/lib/db";
import { Blog } from "@/model/blog/blog.model";


// ALL BLOGS
export async function GET() {
    await ConnectToDB()

    const AllBlogs = await Blog.find()

    return Response.json(
        {
            status: "success",
            message: "All Blogs",
            data: AllBlogs
        }
    )

}


// CREATE BLOG
export async function POST(request: Request) {
    await ConnectToDB()

    const blog = await Blog.insertOne(await request.json())

    return Response.json(
        {
            status: "success",
            message: "Create Blog Success",
            data: blog
        }
    )

}