// Contact form

var typesOfTrip = document.getElementById ('typesoftrip')
var typeOfTrip  = typesOfTrip.options[typesOfTrip.selectedIndex].text


const consultancy = document.getElementById('consultancy');
const personalizedRoutes = document.getElementById('personalizedRoutes');
const other = document.getElementById ('other');

var subject = [consultancy, personalizedRoutes, other]



// Function to change email subject
function changeSubject (id, subjectTitle){
    document.getElementById(id).setAttribute("name", subjectTitle)
}


subject.forEach(element => {
    element.addEventListener ('click', (e)=>{
        console.log("clicked by " + element.value)
        changeSubject ('subject', element.value)
    })

});

