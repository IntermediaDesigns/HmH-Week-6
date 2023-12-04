export default async function Dropdown() {

  const response = await fetch('https://random-data-api.com/api/v2/beers?size=20');
  const data = await response.json();
  const beers = data.beers;



  return (
       <>
       <h3>Beer</h3>
       <p>Choose your favorite one to see its details.</p>
       <div>
         <select> 
           <option value='' key=''> </option>
         </select>
       </div>

      <div>
        <table> 
          
        </table>
      </div>


       </>
  )
}

