class JsOrderForm{
    constructor(){
        this.formContainer = document.getElementById("js-form");
        this.createForm(0)
    }

    createFormElement(type, name){
        const newField = document.createElement("div");
        const fieldLabel = document.createElement("label");
        fieldLabel.innerText = `${name}`;
        const fieldInput = document.createElement("input");
        fieldInput.type = type;
        newField.appendChild(fieldLabel);
        newField.appendChild(fieldInput);
        return newField;
    }

    createFormButtons(){
        const btnGroup = document.createElement("div");
        const addBtn= document.createElement("button");
        addBtn.innerText="Add";
        addBtn.type="button";
        btnGroup.appendChild(addBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.type="button";
        btnGroup.appendChild(deleteBtn);
        return btnGroup;
    }

    createForm(index){
        const formLegend = document.createElement("legend");
        formLegend.innerText = "New Form";
        this.formContainer.appendChild(formLegend);
        formLegend.appendChild(this.createFormElement("text", "Name"));
        formLegend.appendChild(this.createFormElement("email", "Email"));
        formLegend.appendChild(this.createFormElement("number", "Number of Tickets"))
        formLegend.appendChild(this.createFormButtons());
    }
}

const jsOrderForm = new JsOrderForm();