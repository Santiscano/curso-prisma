import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

(async function main() {
    try {
        //* CREAR
        // const newUser = await prisma.user.create({
        //     data: {
        //         name: "santiago",
        //         email: "santiagoscano@gmail.com"
        //     }
        // });
        // console.log('newUser: ', newUser);
    
        //* BUSCAR TODOS
        // const users = await prisma.user.findMany()
        // console.log('users: ', users);
    
        //* BUSCAR 1 por condicion
        // const user = await prisma.user.findFirst({
        //     where: {
        //         OR: [
        //             {name:"Santiago"},
        //             {email: 'santiagoscano@hotmail.com'}
        //         ], // asi seria una sentencia select * from users where name = "santiago" or email = "santia...."
        //         AND: [...] // lo mismo con AND
        //         name: { contains: "name with like"} // asi se trabaja el like
        //     }
        // });
        // console.log('user: ', user);

        //* UPDATE
        // const user = await prisma.user.update({
        //     where: {id:2},
        //     data:{
        //         lastname: "apellido actualizado",
        //         name: "nombre actualizado"
        //     }
        // });
        // console.log('user: ', user);

        //* UPDATE MANY
        // const result = await prisma.user.updateMany({
        //     where: {
        //         name: {
        //             contains: "santi"
        //         }
        //     },
        //     data:{
        //         lastname: "apellido actualizado",
        //         name: "nombre actualizado"
        //     }
        // });
        // console.log('result: ', result);
    
        //* ELIMINAR 
        // const user = await prisma.user.delete({
        //     where: {
        //         id: 3
        //     }
        // });
        // console.log('user: ', user);

        //* DELETE MANY
        // const result = await prisma.user.deleteMany({
        //     where: {
        //         name: "hector"
        //     }
        // });
        // console.log('result: ', result);

        //* UPSERT
        // const user = await prisma.user.upsert({
        //     where: {
        //         email: "santiscano@gmail.com"
        //     },
        //     create: {
        //         email: "santiscano@gmail.com",
        //         password: "$2a$10$rIJ6Ue5lZ8qvfQyMu49O7OkjRcGzNgVLKpwCdP9EbxFkAHnhWtS.",
        //         name: "SanTi",
        //         lastname: "Scano"
        //     },
        //     update: {
        //         lastname: "lastname actualizado en upsert"
        //     }
        // })
        // console.log('user: ', user);
    
    } catch (error) {
        console.log('error: ', error.meta.cause);
    }

})();