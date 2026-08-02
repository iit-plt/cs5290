
fetch('data/lectures.json')
.then(r=>r.json())
.then(data=>{
 const tb=document.querySelector('#lectureTable tbody');
 data.forEach(l=>{
   tb.innerHTML+=`<tr>
   <td>${l.lecture}</td>
   <td>${l.date}</td>
   <td>${l.topic}</td>
   <td><a class="btn" target="_blank" href="${l.slides}">Download</a></td>
   <td>${l.reference||'-'}</td>
   </tr>`;
 });
});
