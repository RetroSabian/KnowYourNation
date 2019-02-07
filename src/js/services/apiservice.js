



export const RegisterUser = (username, surname, passsword, email, phoneNumber, membershipType)=>{

        fetch('http://ereader.retrotest.co.za/api/Db', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "usersId": 0,
        "name": username,
        "surname": surname,
        "email": email,
        "phoneNumber": phoneNumber,
        "password": passsword,
        "membershipType": membershipType,
    })
    })
}