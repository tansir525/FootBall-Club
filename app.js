document.getElementById("serchButton").addEventListener("click", function () {
  const serchinput = document.getElementById("serchinput");
  const footBallteam = serchinput.value;
  serchinput.value = "";

  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${footBallteam}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => teamsinput(data.teams));
});

function teamsinput(teams) {
  const clubs = document.getElementById("clubs");
  clubs.textContent = "";
  for (const team of teams) {
    console.log(team);

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100 rounded">
                        <img src="${
                          team.strTeamBadge
                        }" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">${
                              team.strTeam
                            }</h5>
                            <h6 class="card-title">${team.strAlternate}</h6>
                            <h5 class="card-title">${team.strCountry}</h5>
                            <p class="card-text">
                               ${team.strDescriptionEN.slice(0, 150)} 
                            </p>
                        </div>
                        
                    </div>
    `;
    clubs.appendChild(div);
  }
}
