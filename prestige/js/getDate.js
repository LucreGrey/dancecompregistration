var leadAge;
var followAge;

function getLeadAge () {
    console.log("Reached getLeadAge");
    birthDate = document.getElementById("dobl").value;
    leadAge = calculateAge(birthDate);
}
function getFollowAge () {
    console.log("Reached getFollowAge");
    birthDate = document.getElementById("dobf").value;
    followAge = calculateAge(birthDate);
}

const calculateAge = (birthday) => {
        const ageDifMs = Date.now() - new Date(birthday).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }