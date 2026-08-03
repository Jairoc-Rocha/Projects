const users = {
    id: "1",
    name: "Jairo",
    role: "customer"
}

// Coverte um objeto para JSON
const userAsText = JSON.stringify(users)
console.log(userAsText)

// Coverte um JSON para objeto
const parsedUser = JSON.parse(userAsText)
console.log(parsedUser)

