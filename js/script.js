const tbody = document.getElementById("lectureBody");

fetch("data/lectures.json")
.then(res => res.json())
.then(data => {

    if(data.length===0){

        tbody.innerHTML = `
        <tr>
            <td colspan="5" class="placeholder">
                No lectures have been uploaded yet.
            </td>
        </tr>`;
        return;
    }

    data.forEach((lec,index)=>{

        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${lec.date}</td>
            <td>${lec.topic}</td>
            <td><a class="button" href="${lec.slides}" target="_blank">Download</a></td>
            <td>${lec.reference || "-"}</td>
        </tr>`;

    });

});
