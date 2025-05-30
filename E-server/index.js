// //backend
// //class-1&2&3
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

// //route, api end point

// app.get("/hi", (req, res) => {
//     res.json({
//         success: true,
//         message: "First API server..... "
//     });
// })

// app.get("/ping", (req, res) => {
//     res.json({
//         success: true,
//         message: "bye"
//     });
// })

// app.post("/ping", (req, res) => {
//     console.log(req.query);
//     res.json({
//         success: true,
//         message: `hi ${req.query.name}.Your age is ${req.query.age} `

//     });
// })

//class-4

const STUDENTS = [
    {
        id: 1,
        name: "karishma",
        city: "nagpur",
        gender: "female",
        post: "frontend developer",
        bloodGroup: "o+",
        birthDate: 6 / 11 / 2001,
        email: "wadaskarkarishma@gmail.com",
        age: 24,
        image: `https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid`
    },
    {
        id: 2,
        name: "anshul",
        city: "kondhali",
        gender: "female",
        post: "frontend developer",
        bloodGroup: "o+",
        birthDate: 6 / 11 / 2001,
        email: "wadaskarkarishma@gmail.com",
        age: 24,
        image: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid"
    },
    {
        id: 3,
        name: "yashu",
        city: "vardha",
        gender: "female",
        post: "frontend developer",
        bloodGroup: "o+",
        birthDate: 6 / 11 / 2001,
        email: "wadaskarkarishma@gmail.com",
        age: 24,
        image: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid"
    },
    {
        id: 4,
        name: "shweta",
        city: "vardha",
        gender: "female",
        post: "frontend developer",
        bloodGroup: "o+",
        birthDate: 6 / 11 / 2001,
        email: "wadaskarkarishma@gmail.com",
        age: 24,
        image: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid"
    },
    {
        id: 5,
        name: "anuradha",
        city: "nagpur",
        gender: "female",
        post: "frontend developer",
        bloodGroup: "o+",
        birthDate: 6 / 11 / 2001,
        email: "wadaskarkarishma@gmail.com",
        age: 24,
        image: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid"
    },
    {
        id: 6,
        name: "punam",
        city: "higna",
        gender: "female",
        post: "frontend developer",
        bloodGroup: "o+",
        birthDate: 6 / 11 / 2001,
        email: "wadaskarkarishma@gmail.com",
        age: 24,
        image: "https://cdn-icons-png.freepik.com/256/3135/3135823.png?semt=ais_hybrid"
    }
]

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "server is runing"
    })
})
app.get("/students", (req, res) => {
    res.json({
        success: true,
        data: STUDENTS,
        message: 'student fetched successfuly'
    })
})

app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    const student = STUDENTS.find(stud => stud.id == id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        data: student,
        message: "Student fetched successfully"
    });
}); ``

//POST API
app.post("/students", (req, res) => {
    const { id, name, city, gender, post, bloodGroup, birthDate, email, age, image } = req.body;

    //validation
    if (!id) {
        return res.json({
            success: false,
            message: "roll no is required"
        });
    }
    if (!name) {
        return res.json({
            success: false,
            message: "name is required"
        });
    }
    if (!city) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!gender) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!city) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!post) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!bloodGroup) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!birthDate) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!email) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!age) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    if (!image) {
        return res.json({
            success: false,
            message: "city is required"
        });
    }
    const studentwithid = STUDENTS.find((stud) => {
        if (stud.id == id)
            return stud;
    })
    if (studentwithid) {
        return res.json({
            success: false,
            message: "student with this roll no is already exists"
        })
    }
    const student = {
        id,
        name,
        city,
        gender,
        post,
        bloodGroup,
        birthDate,
        email,
        age,
        image
    }

    STUDENTS.push(student);
    res.json({
        success: true,
        data: student,
        message: "student added successfully"
    });
})

//DELETE API
// app.delete("/students/:id",(req,res)=>{
//     const {id}=req.params;
//     let studentindex = -1;

// STUDENTS.forEach((stud,index)=>{
// if(stud.id == id){
//     studentindex == index;
// }
// });
// if (studentindex === -1){
//     return res.json({
//         success:false,
//         message:"student not found"

//     });
// }
// STUDENTS.splice(studentindex,1);
// res.json({
//     success:true,
//     message:"student deleted successfully"
// });
// });

app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    let studentindex = -1;

    STUDENTS.forEach((stud, index) => {
        if (stud.id == id) {  // Use `==` for type coercion or `===` for strict check
            studentindex = index; // Correct assignment here
        }
    });

    if (studentindex === -1) {
        return res.status(404).json({  // Use 404 for "not found"
            success: false,
            message: "student not found"
        });
    }

    STUDENTS.splice(studentindex, 1);  // Remove student from array
    res.json({
        success: true,
        message: "student deleted successfully"
    });
});

// app.put("/students/:id", (req, res) => {
//     const { id } = req.params;
//     let studentindex = -1;

//     STUDENTS.map((stud, index) => {
//         if (stud.id == id) {
//             studentindex == index;
//         }
//     })
//     if (studentindex == -1) {
//         return res.json({
//             success: false,
//             message: "student not found"

//         })
//     }
//     const student = {
//         id,
//         name,
//         city
//     }
//     STUDENT[studentindex] = student;
//     res.json({
//         success: true,
//         data: student,
//         message: "student updated successfully"
//     })
// })

app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, city } = req.body;  // Destructure from request body

    if (!name || !city) {
        return res.status(400).json({
            success: false,
            message: "Name and city are required"
        });
    }

    const studentindex = STUDENTS.findIndex(stud => stud.id == id);  // Use findIndex for simplicity

    if (studentindex === -1) {
        return res.status(404).json({
            success: false,
            message: "student not found"
        });
    }

    const updatedStudent = { id, name, city };
    STUDENTS[studentindex] = updatedStudent;  // Correct array modification

    res.json({
        success: true,
        data: updatedStudent,
        message: "student updated successfully"
    });
});

app.patch("/students/:id", (req, res) => {
    const { id } = req.params; // Get the student ID from the URL
    const { city } = req.body;  // Get the properties to update from the request body

    const studentIndex = STUDENTS.findIndex(stud => stud.id == id);

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "student not found"
        });
    }

    // Update only the provided fields
    const student = STUDENTS[studentIndex];
    const updatedStudent = { city };

    STUDENTS[studentIndex] = updatedStudent;

    res.json({
        success: true,
        data: updatedStudent,
        message: "student updated successfully"
    });
});


//WRONG API PATH
app.get("*", (req, res) => {
    res.json({
        success: false,
        message: 'invalid API'
    })
})

//SERVER PORTAL
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

