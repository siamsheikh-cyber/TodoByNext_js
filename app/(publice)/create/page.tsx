import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "./action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CreateBlog() {
    return (
        <div className="max-w-2xs mx-auto mt-12">
            <form action={createBlog}>
                <Label htmlFor="terms" className="mb-1">Title</Label>
                <Input type="text" placeholder="text" className="mb-2" name="title" />
                <Label htmlFor="terms" className="mb-1">Description</Label>
                <Textarea placeholder="Type your message here." className="mb-2" name="description" />
                <Button className="min-w-2xs cursor-pointer">Create</Button>
            </form>
        </div>
    );
}

export default CreateBlog;