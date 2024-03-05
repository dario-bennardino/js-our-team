const output = document.querySelector(".output")
const teamInfo = document.querySelector(".team-info")

//Creo array di oggetti del team con nome lavoro foto 
const members = [
    {
        firstName: 'Wayne',
        secondName: 'Barnett',
        job: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        firstName: 'Angela',
        secondName: 'Caroll',
        job: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        firstName: 'Walter',
        secondName: 'Gordon',
        job: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela',
        secondName: 'Lopez',
        job: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott',
        secondName: 'Estrada',
        job: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara',
        secondName: 'Ramos',
        job: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    }
]

//Stampo in console per ogni membro del team tutte le informazioni nome lavoro e foto
//Con ciclo for of

for(const member of members){
    console.log(member);
  }


  
  //Stampare nel DOM le info sotto forma di stringhe
  let teamInfoString = '';

  for (const member of members) {
    teamInfoString += `

        <div>
            <p>Name: ${member.firstName} ${member.secondName}</p>
            <p>Job: ${member.job}</p>
            <p>Photo: ${member.photo}</p>
        </div>
        <hr>
    `;
  }

  console.log(teamInfoString);

  teamInfo.innerHTML = teamInfoString;









//   output.innerHTML += `
  
//     <div class="col mb-4 ">
//                 <div class="card" style="width: 18rem;">
//                     <img src="img/wayne-barnett-founder-ceo.jpg" class="card-img-top" alt="...">
//                     <div class="card-body text-center">
//                         <p class="card-text">Name</p>
//                         <p class="card-text">job</p>
//                     </div>
//                 </div>
//     </div>
//   `

  

