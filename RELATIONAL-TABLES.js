import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

(async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: "escritor",
            lastname: "muy importante",
            email: "email@importante.autor"
        }
    });

    const newPost = await prisma.post.create({
        data: {
            title: "title author",
            content: " this content is very cool",
            // authorId: newUser.id, // ambas opciones son iguales
            author: {
                connect: {
                    id: newUser.id
                }
            }
        }
    });

    // esta seria la convinacion de crear usuario y post
    const newUserPost = await prisma.user.create({
        data: {
            name: "convinando",
            email: "lasconsultas@todo.junto",
            posts: {
                create: {
                    title: "publicacion desde create user",
                    content: "este es el contenido de la publicacion creada a partir del usuario",
                }
            }
        }
    });
    console.log('newUserPost: ', newUserPost);


    const posts = await prisma.post.findMany();
    console.log('posts: ', posts);

})()