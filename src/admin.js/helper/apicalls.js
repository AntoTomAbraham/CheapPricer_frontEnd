const API =process.env.REACT_APP_BACKEND

export const createProduct=(product)=>{
    console.log(product);
    return fetch(`http://localhost:8000/admin/create`,{
        mode: 'no-cors',
        method:"POST",
        headers:{
            "Content-Type" :"application/json",
        },
        body:product
    }).then(response => {
        console.log("entered")
        console.log(response);
        return response.json();
      })
      .catch((err)=>{ 
          console.log(err)
        });

}

