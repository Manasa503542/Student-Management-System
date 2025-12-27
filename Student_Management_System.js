let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        let row = `<tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Fill all fields");
        return;
    }

    students.push({ name, roll });
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();
