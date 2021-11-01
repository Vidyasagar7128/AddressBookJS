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
        }
        else {
            document.getElementById('result').innerHTML = "Already Exist!";
        }
    } else {
        document.getElementById('result').innerHTML = "Failed";
    }
}
