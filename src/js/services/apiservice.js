export const RegisterUser = (username, surname, passsword, email, phoneNumber, membershipType)=>{

    fetch('http://ereader.retrotest.co.za/api/Db', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "usersId": 0,
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
            "email": "string",
            "password": "string"
            })
        });
        const content = await rawResponse.json();
      
        alert(JSON.stringify(content) );
      })();

    // fetch('http://ereader.retrotest.co.za/api/Users/login', {
    // method: 'POST',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
    //     "username": username,
    //     "pass": pass
    //     })
    // }).then(function(res){ return res.json(); })
    // .then(function(data){ alert( JSON.stringify( data ) ) })
}