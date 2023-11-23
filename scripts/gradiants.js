function newGradiant(){
    const R1 = document.querySelector("#R1-input").value
    const G1 = document.querySelector("#G1-input").value
    const B1 = document.querySelector("#B1-input").value
    const R2 = document.querySelector("#R2-input").value
    const G2 = document.querySelector("#G2-input").value
    const B2 = document.querySelector("#B2-input").value
    const gradiantColor = document.querySelector("#gradiant-input").value
    const gradiantBackground = document.querySelector("#gradiant")
    gradiantBackground.style.background = `linear-gradient(${R1}, ${G1}, ${B1}, ${R2}, ${G2}, ${B2}, ${gradiantColor}) `
    
    console.log(`linear-gradient(${R1}, ${G1}, ${B1}, ${R2}, ${G2}, ${B2}, ${gradiantColor}`)
}