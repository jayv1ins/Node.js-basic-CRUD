<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                darkb: '#287094 ',
                darkerb: '#023246 ',
              }
            }
          }
        }

    document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
    });
  });
      </script>
  <title>Register</title>

  <style>
    body {
    background-image: linear-gradient(-225deg, #2ba17e 0%, #5b86e2 100%);
background-image: linear-gradient(to top, #a8edea 0%, #7a8ee7 100%);
background-attachment: fixed;
  background-repeat: no-repeat;

    font-family: 'Vibur', cursive;
/*   the main font */
    font-family: 'Abel', sans-serif;
opacity: .95;
/* background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%); */
}
  </style>
</head>
<body>
  <section class="px-6 py-8">
    <main class="max-w-5xl mx-auto  p-6 rounded-xl">
        <div class ="border border-white p-6 rounded-xl">
            <h1 class="text-center font-bold text-xl">Data</h1>


            <form method="POST"  class="mt-10">
              <div class="flex">
                <label class="block py-2 px-2 mt-2 uppercase font-bold text-xs text-gray-700">Last Name </label>
                <input class="inline-block border border-white rounded-xl p-2 w-80" name="LastName" type="text" autocomplete="LastName" required min="4" pattern="[a-zA-Z]+">
            
                <label class="block py-2 px-2 mt-2 ml-2 uppercase font-bold text-xs text-gray-700">First Name </label>
                <input class="inline-block border border-white rounded-xl p-2 w-80 ml-2" name="FirstName" type="text" autocomplete="FirstName" required min="4" pattern="[a-zA-Z]+">
            </div>
            <div class="flex py-4" >
                <label class="block mt-2 py-2 px-2 uppercase font-bold text-xs text-gray-700">Middle Name </label>
                <input class="border border-white  rounded-xl p-2 w-80" name="MiddleName" type="text" autocomplete="MiddleName" required min="4" pattern="[a-zA-Z]+">
                
                <label class="block mt-2  py-2 px-2 uppercase font-bold text-xs text-gray-700">Gender </label>
                <input class="border border-white  rounded-xl p-2 w-40" name="Gender" type="text" autocomplete="Gender" required  placeholder="Male/Female" >

                <label class="block mt-2 uppercase font-bold text-xs text-gray-700">Birthday: </label>
                <input  class="border border-white  rounded-xl p-2 w-50" name="Birthday" type="date" autocomplete="Birthday" required placeholder="Month/Date/Year">
            </div>

                 <label class="block mt-2 uppercase font-bold text-xs text-gray-700">Country: </label>
                <input  class="border border-white  rounded-xl p-2 w-full" name="Country" type="text" autocomplete="Country" required pattern="[a-zA-Z]+">

              <label class="block mt-2 uppercase font-bold text-xs text-gray-700">Home Address: </label>
                <input  class="border border-white  rounded-xl p-2 w-full" name="HomeAddress" type="text" autocomplete="HomeAddress" required>

                <label class="block mt-2 uppercase font-bold text-xs text-gray-700">City: </label>
                <input class="border border-white  rounded-xl p-2 w-full" name="City" type="text" autocomplete="City" required >
                
                <label class="block mt-2 uppercase font-bold text-xs text-gray-700">Region </label>
                <input class="border border-white  rounded-xl p-2 w-full" name="Region" type="text" autocomplete="Region" required >
                
              <label class="block mt-2 uppercase font-bold text-xs text-gray-700">ZIP CODE </label>
                <input  class="border border-white  rounded-xl p-2 w-20" name="FirstName" type="text" autocomplete="ZIPCode" required min="4"  pattern="[0-9]+" > 

              <label class="block mt-2 uppercase font-bold text-xs text-gray-700">Hobby: </label>
                <input  class="border border-white  rounded-xl p-2 w-full" name="Hobby" type="text" autocomplete="Hobby" required>

              <label class="block mt-2 uppercase font-bold text-xs text-gray-700">Civil Status: </label>
                <input  class="border border-white  rounded-xl p-2 w-full" name="CivilStatus" type="text" autocomplete="CivilStatus" required placeholder="Sinlge, Married, Divorced, Widowed, ">
              
                <div class="relative inline-block text-left">
                  <div>
                    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                      Options
                      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>


                  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                      <form method="POST" action="#" role="none">
                        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                      </form>
                    </div>
                  </div>
                </div>
                  <div class="mt-6 text-center">
                    <button type="submit" class="bg-darkb text-white uppercase font-semibold text-xs py-2 px-10 rounded-2xl hover:bg-darkerb"
                            > Submit
                    </button>

                </div>
               
            </form>
        </div>
    </main>
</section>
    
</body>
</html>