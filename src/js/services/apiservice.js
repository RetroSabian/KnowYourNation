export const RegisterUser = (username, surname, passsword, email, phoneNumber, membershipType)=>{

    fetch('http://ereader.retrotest.co.za/api/Db', {
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
        "membershipType": membershipType
        })
    })
}

export const LoginUser = (username, pass)=>{

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
        const content = await rawResponse.json();
      
        alert(JSON.stringify(content) );
      })();
}