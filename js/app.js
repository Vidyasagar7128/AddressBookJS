class Contact {
    fname;
    lname;
    address;
    city;
    state;
    zip;
    mobile;
    email
}
let book = []
///Create Contact
function SaveData() {
    let contact = new Contact()
    //Patterns
    let rxName = /^[A-Z]{1}[a-z]{3,}$/;
    let rxLname = /^[A-Z]{1}[a-z]{3,}$/;
    let rxAddress = /^[A-Z]{1}[a-z]{4,}$/;
    let rxCity = /^[A-Z]{1}[a-z]{4,}$/;
    let rxState = /^[A-Z]{1}[a-z]{4,}$/;
    let rxZIP = /^[4][0-9]{5}/;
    let rxPhone = /^[789]+[0-9]{9,9}$/;
    let rxEmail = /^[a-z]+[.]?[a-z]+[0-9]?[@]+[a-z]+[.]+[a-z]+[.]?[a-z]+$/;

    contact.fname = document.getElementById('fname').value;
    contact.lname = document.getElementById('lname').value;
    contact.address = document.getElementById('address').value;
    contact.city = document.getElementById('city').value;
    contact.state = document.getElementById('state').value;
    contact.zip = document.getElementById('zip').value;
    contact.mobile = document.getElementById('mobile').value;
    contact.email = document.getElementById('email').value;


    if (rxName.test(contact.fname)) {
        document.getElementById('nameerror').innerHTML = "";
    } else {
        document.getElementById('nameerror').innerHTML = "Firstname is Invalid";
    }
    if (rxLname.test(contact.lname)) {
        document.getElementById('lastnameerror').innerHTML = "";
    } else {
        document.getElementById('lastnameerror').innerHTML = "Lastname is Invalid";
    }
    if (rxAddress.test(contact.address)) {
        document.getElementById('addresserror').innerHTML = "";
    } else {
        document.getElementById('addresserror').innerHTML = "Address is Invalid";
    }
    if (rxCity.test(contact.city)) {
        document.getElementById('cityerror').innerHTML = "";
    } else {
        document.getElementById('cityerror').innerHTML = "City is Invalid";
    }
    if (rxState.test(contact.state)) {
        document.getElementById('stateerror').innerHTML = "";
    } else {
        document.getElementById('stateerror').innerHTML = "State is Invalid";
    }
    if (rxZIP.test(contact.zip)) {
        document.getElementById('ziperror').innerHTML = "";
    } else {
        document.getElementById('ziperror').innerHTML = "Zip is Invalid";
    }
    if (rxPhone.test(contact.mobile)) {
        document.getElementById('mobileerror').innerHTML = "";
    } else {
        document.getElementById('mobileerror').innerHTML = "Number is Invalid";
    }
    if (rxEmail.test(contact.email)) {
        document.getElementById('emailerror').innerHTML = "";
    } else {
        document.getElementById('emailerror').innerHTML = "Email is Invalid";
    }

    if (rxName.test(contact.fname) && rxLname.test(contact.lname) && rxAddress.test(contact.address) && rxCity.test(contact.city) && rxState.test(contact.state) && rxZIP.test(contact.zip) && rxPhone.test(contact.mobile) && rxEmail.test(contact.email)) {
        let index = book.findIndex(i => i.fname == contact.fname)
        if (index == -1) {
            book.push(contact);
            document.getElementById('result').innerHTML = "Saved";
            document.getElementById('count').innerHTML = book.length;
            setTimeout(() => {
                document.getElementById('result').innerHTML = "Save";
            }, 2000);
        }
        else {
            document.getElementById('result').innerHTML = "Already Exist!";
            setTimeout(() => {
                document.getElementById('result').innerHTML = "Save";
            }, 2000);
        }
    } else {
        document.getElementById('result').innerHTML = "Failed";
        setTimeout(() => {
            document.getElementById('result').innerHTML = "Save";
        }, 2000);
    }
}
///Show Contacts
function ShowData() {
    debugger;
    let innerData = "<p>Contacts:</p>"
    book.forEach(e => {
        innerData += `<p>${e.fname} ${e.lname} ${e.address} ${e.city} ${e.state} ${e.zip} ${e.mobile} ${e.email}</p>`
        document.getElementById('show').innerHTML = innerData
    })
}
/// Find Contact
function FindData() {
    debugger;
    let name = document.getElementById('fname').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let findIndex = book.findIndex((obj => obj.fname == name || obj.city == city || obj.state == state));
    if (findIndex > -1) {
        document.getElementById('fname').value = book[findIndex].fname;
        document.getElementById('lname').value = book[findIndex].lname;
        document.getElementById('address').value = book[findIndex].address;
        document.getElementById('city').value = book[findIndex].city;
        document.getElementById('state').value = book[findIndex].state;
        document.getElementById('zip').value = book[findIndex].zip;
        document.getElementById('mobile').value = book[findIndex].mobile;
        document.getElementById('email').value = book[findIndex].email;
        document.getElementById("edit").disabled = false;
    } else {
        document.getElementById('find').innerHTML = "Not Found";
    }
}
//Edit Data
function Editdata() {
    let name = document.getElementById('fname').value;
    let findIndex = book.findIndex((obj => obj.fname == name));
    if (findIndex > -1) {
        let contact = new Contact()
        contact.fname = document.getElementById('fname').value;
        contact.lname = document.getElementById('lname').value;
        contact.address = document.getElementById('address').value;
        contact.city = document.getElementById('city').value;
        contact.state = document.getElementById('state').value;
        contact.zip = document.getElementById('zip').value;
        contact.mobile = document.getElementById('mobile').value;
        contact.email = document.getElementById('email').value;
        book[findIndex] = contact;
        document.getElementById("edit").innerHTML = "Updated";
        setTimeout(() => {
            document.getElementById('edit').innerHTML = "Edit";
        }, 2000);
    } else {
        document.getElementById('find').innerHTML = "Failed to Update";
        setTimeout(() => {
            document.getElementById('result').innerHTML = "Edit";
        }, 2000);
    }
}
//Delete Contact
function DeleteData() {
    let name = document.getElementById('fname').value;
    let findIndex = book.findIndex(i => i.fname == name)
    book.splice(findIndex, 1);
    document.getElementById('delete').innerHTML = "Deleted!";
    setTimeout(() => {
        document.getElementById('delete').innerHTML = "Delete";
    }, 2000);
}