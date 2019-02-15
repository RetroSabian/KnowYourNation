import axios from 'axios';

export const RegisterUser = (username, surname, passsword, email, phoneNumber, membershipType, userOrganisation)=>{

    (async () => {
        const rawResponse = await fetch('https://api.ereader.retrotest.co.za/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": username,
                "surname": surname,
                "email": email,
                "phoneNumber": phoneNumber,
                "password": passsword,
                "userOrganisation": userOrganisation,
                "membershipType": membershipType
            })
        });
        const content = await rawResponse.json();
        return content;
    })();
}

export const GetMemberships = ()=>{
    (async () => {
        let id, type, duration, price, description, allowAnimation, allowArticle, allowBook, allowComic;
        const rawResponse = await fetch('https://api.ereader.retrotest.co.za/api/Memberships', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "id": id,
                    "type": type,
                    "duration": duration,
                    "price": price,
                    "description": description,
                    "allowAnimation": allowAnimation,
                    "allowArticle": allowArticle,
                    "allowBook": allowBook,
                    "allowComic": allowComic
            })
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;
    })();
    }
    
    export const CreateMembership = (type, duration, price, description, allowAnimation, allowArticle, allowBook, allowComic)=>{
       const member ={
                    "type": type,
                    "duration": duration,
                    "price": price,
                    "description": description,
                    "allowAnimation": allowAnimation,
                    "allowArticle": allowArticle,
                    "allowBook": allowBook,
                    "allowComic": allowComic
                }
        axios.post('https://api.ereader.retrotest.co.za/api/Memberships/CreateMembership',member)
        .then(res => {
            console.log(res.status);
          })
    }
export const ForgotPassword = (email)=>{
        (async () => {
            const rawResponse = await fetch(`https://localhost:44311/api/Users/ForgotPassword/${email}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "email": email
                })
            });
        // const content = await rawResponse.json();
        // alert(JSON.stringify(content) );
      })();
}


export const resetPassword = (email , password)=>{
    (async () => {

        email = ForgotPassword.email
        const rawResponse = await fetch(`https://localhost:44311/api/Users/ForgotPassword/${email}${password}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email": email,
            "password": password
            })
        });
    // const content = await rawResponse.json();
    // alert(JSON.stringify(content) );
  })();

}

