import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

(async function main() {
    await prisma.post.create({
        data: {
            title: "curso nodejs y prisma",
            authorId: 2
        }
    })
    const users = await prisma.user.findMany({
        include: {
            posts: true
        }
    });

    users.forEach(user => {
        console.log('------------');
        console.log(`User: ${user.name}`);
        console.log(`Email: ${user.email}`);

        user.posts.forEach((post, i) => {
            console.log(`Post #${i + 1}: ${post.title} - Description: ${post.content}`);
        })
    })
})()