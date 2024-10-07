// import bcrypto from "bcryptjs";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;
//     const salt = bcrypto.genSaltSync(10);
//     const hashedPassword = bcrypto.hashSync(password, salt);

//     try {
//       const newUser = await prisma.user.create({
//         data: {
//           email,
//           password: hashedPassword,
//         },
//       });
//       res.status(201);
//     } catch (error) {
//       res.status(500).json({ message: "User creation failed", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
