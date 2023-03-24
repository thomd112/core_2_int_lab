
// fetch("design-tokens-color.json")
// .then(function(response){
// 	return response.json();
// })
// .then(function(colors){
// 	let placeholder = document.querySelector("#data-output");
// 	let out = "";
// 	for(let color of colors){
// 		out += `
// 			<tr>
// 				<td>${color.name}</td>
// 				<td>${color.value}</td>
// 			</tr>
// 		`;
// 	}

// 	placeholder.innerHTML = out;
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const classesContainer = document.getElementById("classes-container");

    data.classes.forEach(classData => {
      const classElement = document.createElement("div");
      classElement.classList.add("class");

      const nameElement = document.createElement("h2");
      nameElement.textContent = classData.name;
      classElement.appendChild(nameElement);

      const teacherElement = document.createElement("p");
      teacherElement.textContent = `Teacher: ${classData.teacher}`;
      classElement.appendChild(teacherElement);

      const roomElement = document.createElement("p");
      roomElement.textContent = `Room: ${classData.room}`;
      classElement.appendChild(roomElement);

      classesContainer.appendChild(classElement);
    });
  })
  .catch(error => console.error(error));
