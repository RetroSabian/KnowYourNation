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

export const LoginUser = (username, pass)=>{
              /*      This is just to remind me that this code is returned as a json object and how to make the raw function call

        (async () => {
            const rawResponse = await fetch('http://ereader.retrotest.co.za/api/Users/login', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "email": username,
                "password": pass
                })
            });
        // const content = await rawResponse.json();
        // alert(JSON.stringify(content) );
      })();*/

}