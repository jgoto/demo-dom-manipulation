class JsOrderForm{
    constructor(){
        this.formContainer = document.getElementById("js-form");
        this.createForm(0)
    }

    createForm(index){
        const nameField = document.createElement("div");
        const nameLabel = document.createElement("label");
        nameLabel.innerText=`Name ${index===0?"1" : index+1}:`;
        nameField.appendChild(nameLabel);
        const nameInput = document.createElement("input");
        nameInput.type="text";
        nameField.appendChild(nameInput);
        this.formContainer.appendChild(nameField);
        const emailField = document.createElement("div");
        const emailLabel = document.createElement("label");
        emailLabel.innerText=`Email ${index===0?"1" : index+1}:`;
        emailField.appendChild(emailLabel);
        const emailInput = document.createElement("input");
        emailInput.type="email";
        emailField.appendChild(emailInput);
        this.formContainer.appendChild(emailField);
        const numberTicketsField = document.createElement("div");
        const numberTicketsLabel = document.createElement("label");
        numberTicketsLabel.innerText=`Number of Tickets ${index===0?"1" : index+1}:`;
        numberTicketsField.appendChild(numberTicketsLabel);
        const numberTicketsInput = document.createElement("input");
        numberTicketsInput.type="number";
        numberTicketsField.appendChild(numberTicketsInput);
        this.formContainer.appendChild(numberTicketsField);
    }
}

const jsOrderForm = new JsOrderForm();