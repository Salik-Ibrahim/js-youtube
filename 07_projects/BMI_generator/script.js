const form = document.querySelector('form')
// getting height or weight outside of form will give error
form.addEventListener('submit', function (e) {
   e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if (height < 0 || isNaN(height)) {
      results.innerHTML = `Please give a valid ${height}`
   } else if (weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid ${height}`
   } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2)
      results.innerHTML = `<span>${bmi}</span>`

      let textResult = ""

      if (bmi < 18.6) {
         textResult = "You are Under weight"
      } else if (bmi > 24.9) {
         textResult = "You are Under weight"
      } else {
         textResult = "You are in Normal range"
      }

      const div = document.createElement('div');
      const addText = document.createTextNode(textResult);
      div.appendChild(addText);
      form.appendChild(div);
   }
})