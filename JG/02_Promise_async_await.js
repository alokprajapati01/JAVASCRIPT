async function fetchUsers() {
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log("User information");

        users.forEach(user =>{
            console.log("-----------------------------");
            console.log("ID:",user.id);
            console.log("Name:",user.name);
            console.log("Email:", user.email);
            console.log("City:",user.address.city);
            
            
            
        });

    }catch(error){
        console.log("Error while fatching data",error.message);
        
    }
    
    
}
fetchUsers();
